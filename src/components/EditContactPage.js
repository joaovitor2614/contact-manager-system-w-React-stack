import React from 'react'
import ContactForm from './ContactForm'
import { useDispatch, useSelector } from 'react-redux'
import { removeContact, editContact } from '../actions/contacts'
import Button from '@material-ui/core/Button'

const EditContactPage = (props) => {
    const dispatch = useDispatch()
    const { contacts } = useSelector((state) => ({ ...state }))

    const contact = contacts.find(contact => contact.id === props.match.params.id)
    const handleSubmit = (updates) => {

        dispatch(editContact(contact.id, updates))
        props.history.push('/')
    }

    const handleRemove = (id) => {
        dispatch(removeContact(id))
        props.history.push('/')
    }


    return (
        <div>
            <ContactForm handleSubmit={handleSubmit} contact={contact} />
            <Button onClick={() => handleRemove(contact.id)}>Excluir</Button>
        </div>
    )
}

export default EditContactPage