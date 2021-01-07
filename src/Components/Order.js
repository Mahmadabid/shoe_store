import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography, ButtonBase, Button } from '@material-ui/core';
import { GlobalContext } from '../Context/GlobalState';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

export default function Order({ order }) {
    const classes = useStyles();
    const { removeOrder } = React.useContext(GlobalContext)

    return (
        <li style={{ marginTop: '10px' }} className="list">
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Grid container spacing={2}>
                        <Grid item>
                            <ButtonBase className={classes.image}>
                                <img className={classes.img} alt={order.name} src={order.img} />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1">
                                        {order.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        ID: {order.productId.productId}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Button onClick={() => removeOrder(order.id)}>
                                        Remove
                                    </Button>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1" color='primary'>${order.price}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        </li>
    );
}