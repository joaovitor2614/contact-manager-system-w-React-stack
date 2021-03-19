import React, { useState } from 'react'
import contactsSelector from '../selectors/contacts'
import { useSelector, useDispatch } from 'react-redux'
import { setClearFilter } from '../actions/filters'
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import ContactCard from './ContactCard'
import ContactFilters from './ContactFilters'
import ContactTable from './ContactTable'
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    
    pageContent: {
        margin: theme.spacing(4),
        padding: theme.spacing(3),
        marginTop: theme.spacing(9)
    }
    
    
  }));


const ContactList = () => {
    const { pageContent } = useStyles()
    const dispatch = useDispatch();
    const [switchLabel, setSwitchLabel] = useState('Tabela off')
    const [state, setState] = React.useState({
        checkedA: false
    });
    const [visibility, setVisility] = useState(false)
    const contacts = useSelector(state => state.contacts)
    const filters = useSelector(state => state.filters)
    const filteredContacts = contactsSelector(contacts, filters)

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        if (switchLabel === 'Tabela on') {
            setSwitchLabel('Tabela off')
        } else if (switchLabel === 'Tabela off') {
            setSwitchLabel('Tabela on')
        }

        console.log(state.checkedA)
    };

    const handleShow = () => {
        setVisility(true)

    }
    const handleHide = () => {
        setVisility(false)
        dispatch(setClearFilter())
    }




    return (
        <div>
            <Paper elevation={3} className={pageContent}>
                <Grid container justify="space-between" alignItems="center">
                    <Button color="primary" onClick={handleShow}>Mostrar filtros</Button>
                    <Button onClick={handleHide} color="secondary">Remover filtros</Button>
                    <FormControlLabel
                        control={<Switch checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                        label={switchLabel}
                    />
                </Grid>
                
            </Paper>
            {visibility ? (
                <Paper className={pageContent}>
                    <ContactFilters />
                </Paper> 
            ) : ''}
            <Paper className={pageContent}>
                <Grid direction="row" container justify="center" alignItems="center" spacing={2}>
                    {state.checkedA === false ? filteredContacts && filteredContacts.map(contact => (
                        
                        <Grid key={contact.id} item xs={4}>
                            <ContactCard key={contact.id} contact={contact} />
                        </Grid>
                

                        )) : (
                            <Grid item xs={12}>
                                <ContactTable />
                            </Grid>
                        )
                        }
                </Grid>
            </Paper>
            
           


        </div>


    )
}

export default ContactList

/*
<ContactFilters />
            {filteredContacts && filteredContacts.map((contact) => (
                <ContactCard key={contact.id} contact={contact} />
            ))}
            */