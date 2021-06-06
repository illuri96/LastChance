import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Link, Typography, CardActionArea } from '@material-ui/core/';


import useStyles from './styles';


const Videopost = ({ post }) => {
  const classes = useStyles();

  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  

  return (

          <CardActionArea component="a" >
            <Card className={classes.card}>
              <CardMedia className={classes.cardMedia} component='iframe' src= {`http://www.youtube.com/embed/${post.snippet.resourceId.videoId}`}/>
              <div className={classes.cardDetails}>
                <CardContent>
                  <Typography component="h2" variant="h5">
                    {post.snippet.title}
                  </Typography>
                  <Typography variant="subtitle1" paragraph>
                    {isReadMore ? post.snippet.description.slice(0, 100) : post.snippet.description}
                    <Link onClick={toggleReadMore} className="read-or-hide">
                      {isReadMore ? "...read more" : " show less"}
                    </Link>
                  </Typography>                  
                </CardContent>
              </div>             
            </Card>
          </CardActionArea>

  ) 
};

export default Videopost;