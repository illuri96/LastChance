import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';
import { CircularProgress, TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';



import Videos from '../History/Videos';



import useStyles from './styles';

import { getPlaylistItems, getPlaylists } from '../../../actions/sections';



const Science = () => {


    const classes = useStyles();
    const dispatch = useDispatch();

    const [playlistId, setplaylistId] = useSelector((state) => state.sections)


    useEffect(() => {  
      dispatch(getPlaylistItems());
    }, [playlistId, dispatch]);



    
      return (
        <Grid>
          <Videos setplaylistId={setplaylistId} />
        </Grid>
        
      )
  }

export default Science; 