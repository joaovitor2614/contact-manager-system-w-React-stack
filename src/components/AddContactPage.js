import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addContact } from '../actions/contacts'
import ContactForm from './ContactForm'

const AddContactPage = ({ history }) => {
    const dispatch = useDispatch();
    const handleSubmit = (contact) => {

        dispatch(addContact(contact))
        history.push('/')
    }
    return (
        <div>
            <h1>Novo contato</h1>
            <ContactForm handleSubmit={handleSubmit} />
        </div>
    )
}

export default AddContactPage