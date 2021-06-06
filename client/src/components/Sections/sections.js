import React, { useEffect } from 'react';

import { Toolbar, Link } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';


import useStyles from './styles';
import { getPlaylists } from '../../actions/sections';

const Sections = () => {

    const classes = useStyles();
    const dispatch = useDispatch();

    const playlists = useSelector((state) => state.sections);


  // Write an if check with fields.title to playlist.snippet.title and pass playlistid to child component



    useEffect(() => {  
      dispatch(getPlaylists());
    }, []);

    console.log(playlists.items);


    const fields = [
      { title: 'Technology', url: '/technology' },
      { title: 'History', url: '/history' },
      { title: 'Business', url: '/business' },
      { title: 'Politics', url: '/politics' },
      { title: 'Science', url: '/science' },
      { title: 'Health', url: '/health' },
      { title: 'Cinema', url: 'cinema' },
      { title: 'Travel', url: '/travel' },
      { title: 'About', url: '/about' },

    ];

    if(typeof(playlists) !== 'undefined' && playlists != null ){
   //   for(let i=0 ;i < playlists.items.length ; i ++){
            // if (playlists[i].snippet.title === fields.title ){
            //   const setPlaylistId = playlists[i].id ; 
            //   console.log(setPlaylistId);
            //   var obj = playlists.items[i];
    //        console.log(playlists);


    }else {

      console.log('Undefined or Null');
    }

  return (
      <Toolbar component="Sections" variant="dense" className={classes.toolbarSecondary}>
          {fields.map((field) => (
            <Link color="inherit" noWrap key={field.title} variant="body2" href={field.url} className={classes.toolbarLink} >
              {field.title}
            </Link>
          ))}
      </Toolbar>

  )
}
export default Sections; 
