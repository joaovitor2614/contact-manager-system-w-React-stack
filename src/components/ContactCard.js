import React from 'react'
import { useDispatch } from 'react-redux'

import { removeContact } from '../actions/contacts'
import { Link } from 'react-router-dom'
import { defaultMale, defaultFemale } from '../mockData/contactUrl'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Grid } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { red } from '@material-ui/core/colors';



const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 150,
        paddingTop: '56.25%', // 16:9
    },



}));




const ContactCard = ({ contact }) => {

    const dispatch = useDispatch();
    const date = contact.date ? contact.date : 'desconhecido', age = contact.age ? contact.age : 'desconhecido',
        gender = contact.gender ? contact.gender : 'desconhecido';
    const formattedAge = contact.age !== '' ? contact.age > 1 ? `${contact.age} anos` : `${contact.age} ano` : 'desconhecido'
    const formattedGender = contact.gender ? contact.gender === 'male' ? 'Masculino' : 'Feminino' : 'desconhecido'
    const selectedPicture = contact.picture ? contact.picture : contact.gender === 'male' ? defaultMale : defaultFemale

    const handleRemove = (id) => {
        dispatch(removeContact(id))

    }

    const classes = useStyles();
    return (


        <Card className={classes.root}>
            <CardHeader

                title={`${contact.firstName} ${contact.lastName}`}
                subheader={contact.email}
            />
            <CardMedia
                className={classes.media}
                image={selectedPicture}
                title="Contact pic"
            />
            <CardContent>
                <Typography variant="body2" color="textPrimary" component="p">
                    Data de nascimento: {date}
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                    Idade: {formattedAge}
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                    Gênero: {formattedGender}
                </Typography>
            </CardContent>
            <CardActions style={{ backgroundColor: "rgba(243, 241, 239, 1)" }} disableSpacing>
                <Link to={`/edit/${contact.id}`}>
                    <IconButton aria-label="edit" disabled color="primary">
                        <EditIcon />
                    </IconButton>
                </Link>
                <div >
                    <IconButton onClick={() => handleRemove(contact.id)} aria-label="remove" color="secondary">
                        <DeleteIcon />
                    </IconButton>

                </div>

            </CardActions>



        </Card>




    )
}

export default ContactCard