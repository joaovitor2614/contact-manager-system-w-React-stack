import uuid from 'uuid'
import database from '../firebase/firebase'
export const addContact = (contact) => ({
    type: 'ADD_CONTACT',
    contact
})

export const startAddContact = (contactData = {}) => {
    return (dispatch, getState) => {

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
        console.log('until here...')
        return database.ref(`contacts`).push(contact).then((ref) => {
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


        console.log('until here...')
        return database.ref(`contacts/${id}`).remove().then(() => {
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
        const uid = getState().auth
    
        return database.ref(`contacts/${id}`).update(updates).then(() => {
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
        console.log('set contacts here')
        console.log('until here...')
        return database.ref(`contacts`).once('value').then((snapshot) => {
            let contacts = [];
            snapshot.forEach((childSnapshot) => {
                contacts.push({
                    id: childSnapshot.key,

                    ...childSnapshot.val()
                })
            })
            console.log(contacts)
            dispatch(setContacts(contacts))
        }).catch((error) => {
            console.log(error.name)
            console.log(error.message)
        })

    }
}

