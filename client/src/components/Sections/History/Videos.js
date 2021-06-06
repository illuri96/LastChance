import React, { useState } from 'react';
import { Grid, CircularProgress, Link, Typography, CardContent, Card, CardActionArea  } from '@material-ui/core/';
import { useSelector } from 'react-redux';



import useStyles from './styles';
import Videopost from './Videopost';



const Videos = () => {

  const classes = useStyles();
  const playlists = useSelector((state) => state.sections);



  return(
    !playlists.length ? <CircularProgress /> : (
      <Grid className={classes.primaryGrid} container spacing={4}>
        {playlists.map((playlist) => (
          <Grid className={classes.secondaryGrid} key={playlist.id} item xs={12} sm={11} md={3}>
            <Videopost post={playlist}/>
          </Grid>
        ))}
      </Grid>
  ));  
};
export default Videos;









