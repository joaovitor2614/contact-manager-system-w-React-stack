import * as yup from 'yup';



const contactSchema = yup.object().shape({
    firstName: yup.string().max(30, 'Máx: 30 caracteres').required('Primeiro nome é necessário'),
    lastName: yup.string().max(30, 'Máx: 30 caracteres').required('Último nome é necessário'),
    age: yup.number(),
    date: yup.string().required('Data de nascimento é necessário'),
    email: yup.string().required('Email é necessário'),
    gender: yup.string().required('Gênero é necessário')

})

export default contactSchema