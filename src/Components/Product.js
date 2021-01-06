import React from 'react';
import { Outlet} from "react-router";

export const Product = () => {
    return (
        <div>
            <h1 style={{marginLeft:'10px'}}>Products</h1> 
            <hr/>
            <Outlet />
        </div>
    )
}
