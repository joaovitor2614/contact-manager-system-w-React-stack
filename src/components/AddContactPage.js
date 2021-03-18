import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { startAddContact } from '../actions/contacts'
import ContactForm from './ContactForm'

const AddContactPage = ({ history }) => {
    const dispatch = useDispatch();
    const handleSubmit = (contact) => {

        dispatch(startAddContact(contact))
        history.push('/dashboard')
    }
    return (
        <div>
            <h1>Novo contato</h1>
            <ContactForm handleSubmit={handleSubmit} />
        </div>
    )
}

export default AddContactPage