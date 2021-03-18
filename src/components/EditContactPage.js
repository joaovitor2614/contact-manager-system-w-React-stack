import React from 'react'
import ContactForm from './ContactForm'
import { useDispatch, useSelector } from 'react-redux'
import { startEditContact } from '../actions/contacts'
import Button from '@material-ui/core/Button'

const EditContactPage = (props) => {
    const dispatch = useDispatch()
    const { contacts } = useSelector((state) => ({ ...state }))

    const contact = contacts.find(contact => contact.id === props.match.params.id)
    const handleSubmit = (updates) => {
        console.log(contact.id)
        dispatch(startEditContact(contact.id, updates))
        props.history.push('/dashboard')
    }




    return (
        <div>
            <ContactForm handleSubmit={handleSubmit} contact={contact} />

        </div>
    )
}

export default EditContactPage