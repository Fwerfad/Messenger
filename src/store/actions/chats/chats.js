import * as actionTypes from './actionTypes'
import axios from 'axios'

export const fetchSuccess = (chats) => {
    return {
        type: actionTypes.FETCH_CHATS_SUCCESS,
        chats: chats
    }
};

export const fetchFailed = (error) => {
    return {
        type: actionTypes.FETCH_CHATS_FAIL,
        error: error
    }
};

export const fetchStart = () => {
    return {
        type: actionTypes.FETCH_CHATS_START
    }
};

export const fetchChats = (token, userID) => {
    return dispatch => {
        const query = `'https://###.firebaseio.com/?auth=${token}&orderBy="userId"&equalTo="${userID}"`
        axios.get("/chats.json" + query)
            .then((response) => {
                const chats = [];
                for (let key in response.data)
                    chats.push({
                        id: key,
                        ...response.data[key]
                    });
                dispatch(fetchSuccess(chats))
            })
            .catch((err) => {
                fetchFailed(err)
            })
    }
};

// TODO: update function