import React from 'react';
import Order from "./Order";
import { GlobalContext } from "../Context/GlobalState";

export const Cart = () => {

    const { orders } = React.useContext(GlobalContext);
    var total = 0; 
    orders.map((order) => total+=order.price);

    return (
        <div>
            <div className="cart-head">
                <h2 style={{marginLeft:'10px'}}>Your Orders</h2>
                <h3>Total: <span style={{color:'purple'}}>$&nbsp;</span><span style={{color:'blue', marginRight:'10px'}}>{total}</span></h3>
            </div>
            <hr/>
            <ul style={{listStyleType:'none'}}>
                {orders.map((order, ind) => 
                    <Order key={ind} order={order}/> 
                )}
            </ul>
        </div>
    )
}
