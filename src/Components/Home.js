import React from 'react';
import home from "../home.jpg"; 
import StoreIcon from '@material-ui/icons/Store';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

export const Home = () => {
    return (
        <div className="HomeFlex">
            <h1>Buy shoes of your choice</h1>
            <img src={home} alt="Home" width='100%'/>
            <h2>View our Products<Link className="Homeicon" to="products"><Button size="small" color="inherit"><StoreIcon /></Button></Link></h2>
        </div>
    )
}
