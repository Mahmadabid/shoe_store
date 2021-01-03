import React, { useContext } from 'react';
import { ThemeButton } from "../Context/GlobalState";
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import { Link } from 'react-router-dom';
import { MenuBox } from "./MenuBox";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Header() {
    const classes = useStyles();
    const Light = useContext(ThemeButton);

    return (
        <div className={classes.root}>
            <AppBar position="static" className={Light[0] ? '' : 'dark'}>
                <Toolbar>
                    <MenuBox />
                    <Typography variant="h6" className={classes.title}>
                        <Link to="/" className="Link">Shoe Store</Link>
                    </Typography>
                    <Link to="/" className="Link hide"><Button color="inherit" className="header-edit">Home</Button></Link>
                    <Link to="products" className="Link hide"><Button color="inherit" className="header-edit">Product</Button></Link>
                    <IconButton edge="end" color="inherit" size='medium' onClick={() => { Light[1](!Light[0]) }}>
                        {Light[0] ? <Brightness4Icon /> : <Brightness7Icon />}
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div >
    );
}