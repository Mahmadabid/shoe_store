import React from 'react';
import Order from "./Order";
import { GlobalContext } from "../Context/GlobalState";

export const Cart = () => {

    const { orders } = React.useContext(GlobalContext);

    return (
        <div>
            <h2 style={{marginLeft:'10px'}}>Your Orders</h2>
            <hr/>
            <ul style={{listStyleType:'none'}}>
                {orders.map((order, ind) => 
                    <Order key={ind} order={order}/>
                )}
            </ul>
        </div>
    )
}
