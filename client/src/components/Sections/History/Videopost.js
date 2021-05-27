import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import YouTube from 'react-youtube';

import { likePost, deletePost } from '../../../actions/posts';
import useStyles from './styles';

const Videopost = ({ post }) => {
  const classes = useStyles();

  

 

  
};

export default Videopost;