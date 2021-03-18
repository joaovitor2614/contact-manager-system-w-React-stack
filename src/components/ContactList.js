import React, { useState } from 'react'
import contactsSelector from '../selectors/contacts'
import { useSelector, useDispatch } from 'react-redux'
import { setClearFilter } from '../actions/filters'
import Grid from "@material-ui/core/Grid";
import ContactCard from './ContactCard'
import ContactFilters from './ContactFilters'
import ContactTable from './ContactTable'
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';


const ContactList = () => {
    const dispatch = useDispatch();
    const [switchLabel, setSwitchLabel] = useState('Tabela off')
    const [state, setState] = React.useState({
        checkedA: false
    });
    const [visibility, setVisility] = useState('hidden')
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
        setVisility('visible')

    }
    const handleHide = () => {
        setVisility('hidden')
        dispatch(setClearFilter())
    }




    return (
        <div>
            <Button color="primary" onClick={handleShow}>Mostrar filtros</Button>
            <Button onClick={handleHide} color="secondary">Remover filtros</Button>
            <Box component="span" visibility={visibility} overflow="hidden" p={1} m={1}>
                <ContactFilters />
            </Box>
            <FormControlLabel
                control={<Switch checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                label={switchLabel}
            />
            {state.checkedA === false ? filteredContacts && filteredContacts.map(contact => (
                <Grid key={contact.id} item xs={12}>
                    <ContactCard key={contact.id} contact={contact} />
                </Grid>

            )) : (
                <Grid item xs={12}>
                    <ContactTable />
                </Grid>
            )
            }


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