import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';
import { useDispatch } from 'react-redux';
import Videos from './Videos';



import useStyles from './styles';
import { getVideos } from '../../../actions/sections';



const History = () => {


    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
      dispatch(getVideos());
    }, []);


    return (
      <Grow in >
        <Grid >
           <Videos />          
        </Grid>
      </Grow>
      
    );
  }

export default History; 