/** @format */

import {
	SET_SCREAMS,
	SET_SCREAM,
	LIKE_SCREAM,
	UNLIKE_SCREAM,
	LOADING_DATA,
	DELETE_SCREAM,
	POST_SCREAM,
	SUBMIT_COMMENT,
	SET_SCREAMS_FOR_USER,
	CLEAR_SCREAMS,
	//CLEAR_ERRORS
} from "../types";

const initialState = {
	screams: [],
	scream: {},
	loading: false,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case LOADING_DATA:
			return {
				...state,
				loading: true,
			};
		case CLEAR_SCREAMS:
			return {
				...state,
				screams: [],
			};
		case SET_SCREAMS:
			return {
				...state,
				screams: state.screams.concat(action.payload),
				loading: false,
			};
		case SET_SCREAMS_FOR_USER:
			return {
				...state,
				screams: action.payload,
				loading: false,
			};
		case SET_SCREAM:
			return {
				...state,
				scream: action.payload,
			};
		case LIKE_SCREAM:
		case UNLIKE_SCREAM:
			let index = state.screams.findIndex(
				(scream) => scream.screamId === action.payload.screamId
			);
			state.screams[index] = action.payload;
			if (state.scream.screamId === action.payload.screamId) {
				action.payload.comments = state.scream.comments;
				state.scream = action.payload;
			}
			console.log(state.scream, state.screams);
			return {
				...state,
			};
		case DELETE_SCREAM:
			let deleteIndex = state.screams.findIndex(
				(scream) => scream.screamId === action.payload
			);
			state.screams.splice(deleteIndex, 1);
			return {
				...state,
			};
		case POST_SCREAM:
			return {
				...state,
				screams: [action.payload, ...state.screams],
			};
		case SUBMIT_COMMENT:
			// let commentedScream = state.screams.findIndex(
			// 	(scream) => scream.screamId === state.scream.screamId
			// );
			// state.screams[commentedScream].commentCount = [
			// 	action.payload,
			// 	...state.scream.comments,
			// ].length;
			return {
				...state,
				scream: {
					...state.scream,
					comments: [action.payload, ...state.scream.comments],
					commentCount: [action.payload, ...state.scream.comments].length,
				},
			};
		default:
			return state;
	}
}
