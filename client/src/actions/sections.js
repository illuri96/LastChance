import { FETCH_PLAYLISTS, FETCH_PLAYLISTITEMS } from '../constants/actionTypes';


import * as API from '../api/index';

export const getPlaylistItems = () => async (dispatch) => {
    try {
      const { data } = await API.fetchPlaylistItems();

      dispatch({type : FETCH_PLAYLISTITEMS, payload : data.items});

    } catch (error) {
      console.log(error.message);
    }
  };

export const getPlaylists = () => async (dispatch) => {
    try {
      const { data } = await API.fetchPlaylists();
      
      dispatch({type : FETCH_PLAYLISTS, payload : data});

    } catch (error) {
      console.log(error.message);
    }
  };




  