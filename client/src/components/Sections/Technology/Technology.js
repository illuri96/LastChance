import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from '../../../actions/posts';
import Posts from '../../Posts/Posts';
import useStyles from './styles';




const Technology = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);



  return (
    <Grow in >
      <Grid >
         <Posts setCurrentId={setCurrentId} />          
      </Grid>
    </Grow>
    
  );
};

export default Technology;