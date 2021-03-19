import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import { startAddContact } from '../actions/contacts'
import ContactForm from './ContactForm'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
    
    
  }));

const AddContactPage = ({ history }) => {
    const { pageContent } = useStyles();
    const dispatch = useDispatch();
    const handleSubmit = (contact) => {

        dispatch(startAddContact(contact))
        history.push('/dashboard')
    }
    return (
        <Grid container justify="center" alignItems="center">
            <h1>Novo contato</h1>
            <Paper className={pageContent}>
                <ContactForm  handleSubmit={handleSubmit} />
            </Paper>
            
        </Grid>
    )
}

export default AddContactPage