/** @format */

import {
	SET_SCREAMS,
	LOADING_DATA,
	LIKE_SCREAM,
	UNLIKE_SCREAM,
	DELETE_SCREAM,
	SET_ERRORS,
	POST_SCREAM,
	CLEAR_ERRORS,
	LOADING_UI,
	SET_SCREAM,
	STOP_LOADING_UI,
  SUBMIT_COMMENT,
  SET_SCREAMS_FOR_USER,
  CLEAR_SCREAMS
} from "../types";
import axios from "axios";

// Get all screams
export const getScreams = (startAt, limit, clearScreams) => (dispatch) => {
  if(clearScreams) dispatch({type: CLEAR_SCREAMS})
	dispatch({ type: LOADING_DATA });
	axios
		.get(`/screams/${startAt}/${limit}`)
		.then((res) => {
			dispatch({
				type: SET_SCREAMS,
				payload: res.data,
			});
		})
		.catch((err) => {
			dispatch({
				type: SET_SCREAMS,
				payload: [],
			});
		});
};
export const getScream = (screamId) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    axios
      .get(`/scream/${screamId}`)
      .then((res) => {
        dispatch({
          type: SET_SCREAM,
          payload: res.data
        });
        dispatch({ type: STOP_LOADING_UI });
      })
      .catch((err) => console.log(err));
  };
//Post a scream
  export const postScream = (newScream) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    axios
      .post('/screams ', newScream)
      .then((res) => {
        dispatch({
          type: POST_SCREAM,
          payload: res.data
        });
        dispatch(clearErrors());
      })
      .catch((err) => {
        dispatch({
          type: SET_ERRORS,
          payload: err.response.data
        });
      });
  };
// Like a scream
export const likeScream = (screamId) => (dispatch) => {
	axios
		.get(`/scream/${screamId}/like`)
		.then((res) => {
			dispatch({
				type: LIKE_SCREAM,
				payload: res.data,
			});
		})
		.catch((err) => console.log(err));
};
// Unlike a scream
export const unlikeScream = (screamId) => (dispatch) => {
	axios
		.get(`/scream/${screamId}/unlike`)
		.then((res) => {
			dispatch({
				type: UNLIKE_SCREAM,
				payload: res.data,
			});
		})
		.catch((err) => console.log(err));
};
// Submit a comment
export const submitComment = (screamId, commentData) => (dispatch) => {
    axios
      .post(`/scream/${screamId}/comment`, commentData)
      .then((res) => {
        dispatch({
          type: SUBMIT_COMMENT,
          payload: res.data
        });
        dispatch(clearErrors());
      })
      .catch((err) => {
        console.log(err)
        dispatch({
          type: SET_ERRORS,
          payload: err.response.data
        });
      });
  };
  // Delete scream
  export const deleteScream = (screamId) => (dispatch) => {
    axios
      .delete(`/scream/${screamId}`)
      .then(() => {
        dispatch({ type: DELETE_SCREAM, payload: screamId });
      })
      .catch((err) => console.log(err));
  };
  
  //get user data for user page 
  export const getUserData = (userHandle) => (dispatch) => {
    dispatch({ type: LOADING_DATA });
    axios
      .get(`/user/${userHandle}`)
      .then((res) => {
        dispatch({
          type: SET_SCREAMS_FOR_USER,
          payload: res.data.screams
        });
      })
      .catch(() => {
        dispatch({
          type: SET_SCREAMS,
          payload: null
        });
      });
  };
  
  export const clearErrors = () => (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };