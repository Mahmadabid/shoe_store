import React from 'react';
import { useParams } from 'react-router-dom';
import { shoes } from "./shoes";
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export const ProductDetails = () => {
    const { productId } = useParams();
    const product = shoes[productId];
    const { name, img, about } = product;
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div>
            <h1>Product</h1>
            <hr />
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
                                <div className={` ${classes.root} top`}>
                                    <Button className="divs" color="primary" variant="contained" onClick={handleClick}>
                                        Add to Cart
                                    </Button>
                                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                                        <Alert onClose={handleClose} severity="success">
                                            Added to cart
                                        </Alert>
                                    </Snackbar>
                                </div>
                            </div>
                        </Grid>
                    </div>
                </Grid>
            </div>
        </div>
    )
}
