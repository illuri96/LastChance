import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Link } from 'react-router-dom';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Header from './components/Navbar/Navbar'
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import useStyles from './styles';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  const sections = [
    { title: 'Technology', url: '#' },
    { title: 'Culture', url: '#' },
    { title: 'Business', url: '#' },
    { title: 'Politics', url: '#' },
    { title: 'Opinion', url: '#' },
    { title: 'Science', url: '#' },
    { title: 'Health', url: '#' },
    { title: 'Cinema', url: '#' },
    { title: 'Travel', url: '#' },
  ];
  

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
          <Header title="Blog" sections={sections} />
          <Container maxWidth="lg">
            <Grow in>
              <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={4} >
                <Grid item xs={12} sm={7}>
                  <Posts setCurrentId={setCurrentId} />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Form currentId={currentId} setCurrentId={setCurrentId} />
                </Grid>
              </Grid>
            </Grow>
        </Container>
    </Container>
  </React.Fragment>

  );
};

export default App;