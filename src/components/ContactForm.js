import React, { useState } from 'react'
import Progress from './Progress'
import moment from 'moment'
import { Formik, Form, Field } from 'formik';
import contactSchema from '../validation/contact'
import useUploadImg from '../hooks/useUploadImg'
import { makeStyles } from '@material-ui/core/styles';
import {
    TextField, Radio,
    RadioGroup, FormControlLabel,
    FormLabel, FormHelperText, Button
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    input: {
        display: 'none',
    },
}));


const ContactForm = ({ handleSubmit, contact }) => {

    const [picture, setPicture] = useState('')
    const [file, setFile] = useState(null)
    const [fileError, setFileError] = useState('')
    const initialValues = {
        firstName: contact ? contact.firstName : '',
        lastName: contact ? contact.lastName : '',
        email: contact ? contact.email : '',
        gender: contact ? contact.gender : '',
        date: contact ? contact.date : '',
        email: contact ? contact.email : '',
        picture: contact ? contact.picture : '',
        createdAt: contact ? contact.createdAt : {}
    }


    function handleAge(date) {
        console.log(date)
        const age = moment().diff(date, 'years', false);
        console.log(age)
        return age

    }
    function handleFile(e) {
        const types = ['image/jpg', 'image/png', 'image/jpeg']
        let selected = e.target.files[0];
        if (selected && types.includes(selected.type)) {
            setFile(selected)
            setFileError('')
        } else {
            setFileError('Insira uma imagem válida(jpg,jpeg ou png)')
            setFile(null)
        }

    }
    const classes = useStyles();
    return (
        <div>
            <Formik
                validateOnChange={true}
                initialValues={initialValues}
                validationSchema={contactSchema}
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(true)

                    if (picture.length !== 0) {
                        values.picture = picture
                    }

                    if (Object.keys(values.createdAt).length === 0) {
                        values.createdAt = moment();


                    }

                    console.log({
                        ...values
                    })
                    values.age = handleAge(values.date)
                    handleSubmit(values)
                    setSubmitting(false)
                }}
            >
                {({ errors, touched, handleChange, handleBlur }) => (
                    <Form>
                        <Field name="firstName" type="text" label="Primeiro nome"
                            onChange={handleChange} onBlur={handleBlur}
                            as={TextField} helperText={touched.firstName ? errors.firstName : ""}
                            error={touched.firstName && Boolean(errors.firstName)} />
                        <Field name="lastName" type="text" label="Último nome" as={TextField}
                            onChange={handleChange} onBlur={handleBlur}
                            helperText={touched.lastName ? errors.lastName : ""}
                            error={touched.lastName && Boolean(errors.lastName)}
                        />
                        <Field name="email" type="email" label="Email" as={TextField}
                            onChange={handleChange} onBlur={handleBlur}
                            helperText={touched.email ? errors.email : ""}
                            error={touched.email && Boolean(errors.email)}
                        />
                        <Field name="date" type="date" as={TextField}
                            onChange={handleChange} onBlur={handleBlur}
                            helperText={touched.date ? errors.date : ""}
                            error={touched.date && Boolean(errors.date)}

                        />

                        <FormLabel component="legend">Gênero</FormLabel>
                        <Field label='Gênero' placeholder="Gênero" aria-label="gender" name="gender" as={RadioGroup}>
                            <FormControlLabel value="" control={<Radio />} label="Nenhum" />
                            <FormControlLabel value="female" control={<Radio />} label="Feminino" />
                            <FormControlLabel value="male" control={<Radio />} label="Masculino" />
                            <FormHelperText error={touched.gender && Boolean(errors.gender)}>
                                {touched.gender ? errors.gender : ""}
                            </FormHelperText>
                        </Field>
                        <div className={classes.root}>
                            <input
                                accept="image/*"
                                className={classes.input}
                                id="contained-button-file"
                                multiple
                                type="file"
                                onChange={handleFile}
                            />
                            <label htmlFor="contained-button-file">
                                <Button variant="contained" color="primary" component="span">
                                    Upload
                                </Button>
                            </label>
                            <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                            <label htmlFor="icon-button-file">
                                <IconButton color="primary" aria-label="upload picture" component="span">
                                    <PhotoCamera />
                                </IconButton>
                            </label>
                            {fileError && <p>{fileError}</p>}
                        </div>
                        {errors.firstName && touched.firstName ? <div>{errors.firstName}</div> : null}
                        <button type="submit">Salvar</button>
                        {file && <Progress file={file} setFile={setFile} setPicture={setPicture} />}
                    </Form>


                )}
            </Formik>
        </div>
    )
}

export default ContactForm



