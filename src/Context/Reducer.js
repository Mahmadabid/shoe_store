const AppReducer= (state, action) => {
    switch(action.type) {
      case 'Remove_Order':
        return {
          ...state,
          orders: state.orders.filter(order => order.id !== action.payload)
        }
      case 'Place_Order':
        return {
          ...state,
          orders: [action.payload,...state.orders]
        }
      default:
        return state;
    }
  }  
export default AppReducer