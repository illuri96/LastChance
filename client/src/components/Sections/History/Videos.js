import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';

import { useSelector } from 'react-redux';
import Videopost from './History';

import useStyles from './styles';

const Videos = () => {
  const videos = useSelector((state) => state.sections);
  const classes = useStyles();
  

  const posts = videos['items'];
  if (typeof(posts) !== 'undefined' && posts != null) {
    console.log(posts.length);
    return (
      <Grid className={classes.primaryGrid} container spacing={2}>
        {posts.map((post) => (
          <Grid className={classes.secondaryGrid} key={post.id} item xs={12} sm={7} md={5}>

            <Card className={classes.card}>
              <CardMedia className={classes.media} >
              </CardMedia>

              <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.snippet.title}</Typography>
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{post.snippet.description}</Typography>
              </CardContent>
            </Card>

          </Grid>
        ))}
      </Grid>
  );

  } else {

    console.log('Undefined or Null');

    return ('Empty');
  }
  

};
export default Videos;









