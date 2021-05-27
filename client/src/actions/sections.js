import { FETCH_ALL } from '../constants/actionTypes';

import * as API from '../api/index';



export const getVideos = () => async (dispatch) => {
    try {
      const { data } = await API.fetchVideos();   

      dispatch({ type: FETCH_ALL, payload: data});

    } catch (error) {
      console.log(error.message);
    }
  };