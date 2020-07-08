import * as actionTypes from '../../actions/contacts/actionTypes'
import {updateObject} from "../utility";
import {state} from "./tempLocalStore"

const initialState = {
    contacts: [],
    loading: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_CONTACTS_SUCCESS:
            return updateObject(state, {loading: false, contacts: action.contacts})
        case actionTypes.FETCH_CONTACTS_FAIL:
            return updateObject(state, {loading: false})
        case actionTypes.FETCH_CONTACTS_START:
            return updateObject(state, {loading: true})
        case actionTypes.ADD_CONTACT_SUCCESS:
            return updateObject(state, {contacts: state.contacts.concat(action.contact)})
        default:
            return state
    }
};

export default reducer
