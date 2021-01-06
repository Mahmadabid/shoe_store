import React, { createContext } from "react";

import Reducer from './Reducer';

export const ThemeButton = createContext();

const initialState = {
    orders: []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {

    const [state,dispatch] = React.useReducer(Reducer, initialState)

    function removeOrder(id) {
        dispatch({
          type: 'Remove_Order',
          payload: id
        });
      }

    function placeOrder(newOrder) {
        dispatch({
          type: 'Place_Order',
          payload: newOrder
        });
      }

    return (
        <GlobalContext.Provider value={
            {
                orders: state.orders, removeOrder, placeOrder
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}