import React, { useContext } from 'react';
import { ThemeButton } from "../Context/GlobalState";
import shoes from "./shoes";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop:'10px'
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
    },
    img: {
      margin: 'auto',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }));


export const ProductHome = () => {
    const classes = useStyles();
    const Light = useContext(ThemeButton);

    return (
        <div>
       <Grid container spacing={2}>
       {Object.entries(shoes).map(([productId,{name, img, about}])=>
       <Link to={productId} className="Link Links" key={productId}>
      <Grid item xs className='Grid' >
<div className={`${classes.root} paper`}>
      <Paper className={`${classes.paper} productPaper ${Light[0]?'':'color'}`} elevation={3}>
        <Grid container spacing={2}>
          <Grid item>
              <img className={classes.img} alt={name} src={img} />
          </Grid>
          <Grid item xs container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {name}
                </Typography>
                <Typography variant="body2" gutterBottom noWrap>
                  {about}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>       
    </Grid>
    </Link>
       )}
       </Grid>
        </div>
    )
}
