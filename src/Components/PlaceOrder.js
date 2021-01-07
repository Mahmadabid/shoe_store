import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { GlobalContext} from "../Context/GlobalState";

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

export const PlaceOrder = ({name, img, price, productId}) => {

    const { placeOrder, orders } = React.useContext(GlobalContext);
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    var val = [];
    orders.map((order, ind) => val.unshift(ind));
    const newOrder = {
        name, img, productId, id: val[0], price
    }
    const handleClick = () => {
        setOpen(true);
        placeOrder(newOrder)
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div className={`${classes.root}`}>
            <Button className="divs" color="primary" variant="contained" onClick={handleClick}>
                Add to Cart
            </Button>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    Added to cart
                </Alert>
            </Snackbar>
        </div>
    )
}
