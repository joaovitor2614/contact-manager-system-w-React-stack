import React from 'react'
import ContactForm from './ContactForm'
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux'
import { startEditContact } from '../actions/contacts'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
    
    
  }));

const EditContactPage = (props) => {
    const { pageContent } = useStyles();
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
            <h1>Editar contato</h1>
            <Paper className={pageContent}>
                <ContactForm handleSubmit={handleSubmit} contact={contact} />
            </Paper>
            

        </div>
    )
}

export default EditContactPage