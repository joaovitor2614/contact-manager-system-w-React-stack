import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux'
import { removeContact } from '../actions/contacts'
import { defaultMale, defaultFemale } from '../mockData/contactUrl'
import contactsFilter from '../selectors/contacts'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

;

export default function ContactTable() {
    const dispatch = useDispatch();


    const classes = useStyles();
    const contacts = useSelector(state => state.contacts)
    const filters = useSelector(state => state.filters)
    const filteredContacts = contactsFilter(contacts, filters)




    function createData(photo, name, email, age, date, gender, operations) {
        return { photo, name, email, age, date, gender, operations };
    }
    const rows = [
    ]

    filteredContacts.map((contact) => {

        const date = contact.date ? contact.date : 'desconhecido', age = contact.age ? contact.age : 'desconhecido'
        const formattedAge = contact.age !== '' ? contact.age : '?'
        const formattedGender = contact.gender ? contact.gender === 'male' ? 'Masculino' : 'Feminino' : 'desconhecido'
        const selectedPicture = contact.picture ? contact.picture : contact.gender === 'male' ? defaultMale : defaultFemale
        const data = createData(selectedPicture, `${contact.firstName} ${contact.lastName}`,
            contact.email, formattedAge, date, formattedGender, contact.id)
        rows.push(data)

    })

    const operations = (id, nameToRemove = '') => (
        <div>
            <Link to={`/edit/${id}`}>
                <IconButton aria-label="edit" disabled color="primary">
                    <EditIcon />
                </IconButton>
            </Link>
            <IconButton aria-label="remove" color="secondary">
                <DeleteIcon />
            </IconButton>
        </div>
    )





    return (
        <>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Foto</TableCell>
                            <TableCell align="center">Nome</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Idade</TableCell>
                            <TableCell align="center">Data de nascimento</TableCell>
                            <TableCell align="center">Gênero</TableCell>
                            <TableCell align="center">Operações</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell align="center">
                                    <img className='img-table' src={row.photo} alt="uploaded pic"

                                    />
                                </TableCell>

                                <TableCell align="center">{row.name}</TableCell>
                                <TableCell align="center">{row.email}</TableCell>
                                <TableCell align="center">{row.age}</TableCell>
                                <TableCell align="center">{row.date}</TableCell>
                                <TableCell align="center">{row.gender}</TableCell>
                                <TableCell align="center">{operations(row.operations)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </>
    );
}