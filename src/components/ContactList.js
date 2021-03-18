import React, { useState } from 'react'
import contactsSelector from '../selectors/contacts'
import { useSelector } from 'react-redux'
import Grid from "@material-ui/core/Grid";
import ContactCard from './ContactCard'
import ContactFilters from './ContactFilters'
import ContactTable from './ContactTable'
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';


const ContactList = () => {
    const [switchLabel, setSwitchLabel] = useState('Tabela off')
    const [state, setState] = React.useState({
        checkedA: false

    });
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




    return (
        <div>
            <ContactFilters />
            <FormControlLabel
                control={<Switch checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                label={switchLabel}
            />
            {state.checkedA === false ? filteredContacts && filteredContacts.map(contact => (
                <Grid item xs={12}>
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