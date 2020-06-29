import * as actionTypes from './actionTypes'
import axios from 'axios'

export const fetchSuccess = (contacts) => {
    return {
        type: actionTypes.FETCH_CONTACTS_SUCCESS,
        contacts: contacts
    }
};

export const fetchFailed = (error) => {
    return {
        type: actionTypes.FETCH_CONTACTS_FAIL,
        error: error
    }
};

export const fetchStart = () => {
    return {
        type: actionTypes.FETCH_CONTACTS_START
    }
};

export const fetchContacts = (token, userID) => {
    return dispatch => {
        const query = `'https://###.firebaseio.com/?auth=${token}&orderBy="userId"&equalTo="${userID}"`
        axios.get("/chats.json" + query)
            .then((response) => {
                const contacts = [];
                for (let key in response.data)
                    contacts.push({
                        id: key,
                        ...response.data[key]
                    });
                dispatch(fetchSuccess(contacts))
            })
            .catch((err) => {
                fetchFailed(err)
            })
    }
};

export const addContactSuccess = (contactID) => {
    return {
        type: actionTypes.ADD_CONTACT_SUCCESS,
        contact: contactID
    }
};

export const addContactFailed = (error) => {
    return {
        type: actionTypes.ADD_CONTACT_FAIL,
        error: error
    }
};

export const addContact = (contactID, token) => {
    return dispatch => {
        const query = `'https://###.firebaseio.com/?auth=${token}&orderBy="userId"&equalTo="${userID}"`
        axios.post('/contacts.json' + token, {data: "some data IDK"})
            .then((response) => {
                dispatch(addContactSuccess(response.data.name, contactID))
            })
            .catch((err) => {
                addContactFailed(err);
            });
    }
};

// TODO: update function and add contact function