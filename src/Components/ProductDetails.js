import React from 'react';
import { useParams } from 'react-router-dom';
import shoes from "./shoes";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { PlaceOrder } from "./PlaceOrder";

export const ProductDetails = () => {
    const { productId } = useParams();
    const product = shoes[productId];
    const { name, img, about, price} = product;

    return (
        <div>
            <div className="div">
                <h3>{name}</h3>
                <Grid container spacing={2}>
                    <div className="detail">
                        <Grid item xs>
                            <img src={img} alt={name} className='img' />
                        </Grid>
                        <Grid item xs>
                            <div className='space'>
                                <Typography variant="subtitle1" gutterBottom>
                                    {about}
                                </Typography>
                                <div className="order top">
                                <Typography variant="h4" gutterBottom className="price">
                                    ${price}
                                </Typography>
                                <PlaceOrder name={name} img={img} price={price} productId={{productId}}/>                            
                                </div>
                            </div>
                        </Grid>
                    </div>
                </Grid>
            </div>
        </div>
    )
}
