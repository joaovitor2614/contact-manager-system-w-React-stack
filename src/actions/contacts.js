import uuid from 'uuid'
import database from '../firebase/firebase'
export const addContact = (
    {
        firstName = '',
        lastName = '',
        gender = '',
        email = '',
        date = '',
        age = '',
        picture = '',
        createdAt = {}


    }) => ({
        type: 'ADD_CONTACT',
        contact: {
            id: uuid(),
            firstName,
            lastName,
            gender,
            email,
            date,
            age,
            picture,
            createdAt
        }
    })

export const saveUsers = (users) => ({
    type: 'SAVE_USER',
    users
})

export const removeContact = (id) => ({
    type: 'REMOVE_CONTACT',
    id

})

export const editContact = (id, updates) => ({
    type: 'EDIT_CONTACT',
    id,
    updates
})