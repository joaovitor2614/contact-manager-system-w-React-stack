import uuid from 'uuid'
import database from '../firebase/firebase'
export const addContact = (contact) => ({
    type: 'ADD_CONTACT',
    contact
})

export const startAddContact = (contactData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        const {
            firstName = '',
            lastName = '',
            gender = '',
            email = '',
            date = '',
            age = '',
            picture = '',
            createdAt = {}

        } = contactData
        const contact = { firstName, lastName, gender, email, date, age, picture, createdAt }
     
        return database.ref(`users/${uid}/contacts`).push(contact).then((ref) => {
            dispatch(addContact({
                id: ref.key,
                ...contact
            }))
        })

    }
}

export const saveUsers = (users) => ({
    type: 'SAVE_USER',
    users
})

export const removeContact = (id) => ({
    type: 'REMOVE_CONTACT',
    id

})

export const startRemoveContact = (id) => {
    return (dispatch, getState) => {

        const uid = getState().auth.uid
      
        return database.ref(`users/${uid}/contacts/${id}`).remove().then(() => {
            dispatch(removeContact(id))
        }).catch((error) => {
            console.log(error.name)
            console.log(error.message)
        })

    }
}

export const editContact = (id, updates) => ({
    type: 'EDIT_CONTACT',
    id,
    updates
})

export const startEditContact = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
    
        return database.ref(`users/${uid}/contacts/${id}`).update(updates).then(() => {
            dispatch(editContact(id, updates))
        }).catch((error) => {
            console.log(error.name)
            console.log(error.message)
        })

    }
}

export const setContacts = (contacts) => ({
    type: 'SET_CONTACTS',
    contacts
})

export const startSetContacts = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid

     
        return database.ref(`users/${uid}/contacts`).once('value').then((snapshot) => {
            let contacts = [];
            snapshot.forEach((childSnapshot) => {
                contacts.push({
                    id: childSnapshot.key,

                    ...childSnapshot.val()
                })
            })
         
            dispatch(setContacts(contacts))
        }).catch((error) => {
            console.log(error.name)
            console.log(error.message)
        })

    }
}

