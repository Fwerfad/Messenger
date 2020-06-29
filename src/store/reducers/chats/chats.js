import * as actionTypes from '../../actions/chats/actionTypes'
import {updateObject} from "../utility";

const initialState = {
    chats: [],
    loading: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_CHATS_SUCCESS:
            return updateObject(state, {loading: false, chats: action.chats})
        case actionTypes.FETCH_CHATS_FAIL:
            return updateObject(state, {loading: false})
        case actionTypes.FETCH_CHATS_START:
            return updateObject(state, {loading: true})
        default:
            return state
    }
};

export default reducer