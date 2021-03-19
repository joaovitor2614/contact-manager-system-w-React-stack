import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    setClearFilter, setNameFilter,
    setGenderFilter, setMonthFilter,
    setStartAgeFilter, setEndAgeFilter,
    sortByDate, sortByAlpha
} from '../actions/filters'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/FormControlLabel'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    root: {
        alignItems: "center",
        justify: "center",
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1)
        },
        
    },
    children: {
        margin: theme.spacing(2)
    }
}));


const ContactFilters = () => {
    const dispatch = useDispatch();
    const filters = useSelector(state => state.filters)
    const handleText = (e) => {
        const text = e.target.value;
        dispatch(setNameFilter(text))
    }
    const handleGender = (e) => {

        dispatch(setGenderFilter(e.target.value))
    }
    const handleSort = (e) => {
        const sort = e.target.value
        if (sort === 'date') {
            dispatch(sortByDate())
        } else if (sort === 'alphabetical') {
            dispatch(sortByAlpha())
        }
    }
    const handleMonth = (e) => {
        dispatch(setMonthFilter(e.target.value))
    }
    const handleClear = () => {

        dispatch(setClearFilter())
    }

    const handleAge = (e) => {

        switch (e.target.value) {
            case 'range-default':
                dispatch(setStartAgeFilter(0))
                dispatch(setEndAgeFilter(200))

                break;
            case 'range-1':
                dispatch(setStartAgeFilter(0))
                dispatch(setEndAgeFilter(15))
                break;
            case 'range-2':
                dispatch(setStartAgeFilter(16))
                dispatch(setEndAgeFilter(31))
                break;
            case 'range-3':
                dispatch(setStartAgeFilter(32))
                dispatch(setEndAgeFilter(46))
                break;
            case 'range-4':
                dispatch(setStartAgeFilter(47))
                dispatch(setEndAgeFilter(62))
                break;
            case 'range-5':
                dispatch(setStartAgeFilter(63))
                dispatch(setEndAgeFilter(72))
                break;
            case 'range-6':
                dispatch(setStartAgeFilter(77))
                dispatch(setEndAgeFilter(82))
                break;
            case 'range-7':
                dispatch(setStartAgeFilter(83))
                dispatch(setEndAgeFilter(100))
                break;
            case 'range-8':
                dispatch(setStartAgeFilter(100))
                dispatch(setEndAgeFilter(200))
                break;
        }
    }
    const classes = useStyles();

    return (
       
                <Grid className={classes.root} container>
                    <Grid item xs={6}>
                        <InputLabel id="text-filter">Filtrar por nome</InputLabel>
                        <TextField value={filters.text} labelId="text-filter" onChange={handleText} />
                        
                    </Grid>
                    <Grid item xs={6}>
                        <InputLabel id="gender-filter">Gênero</InputLabel>
                            <Select
                                labelId="gender-filter"
                                id="demo-simple-select"
                                value={filters.gender}
                                onChange={handleGender}
                            >
                                <MenuItem value='all'>Todos</MenuItem>
                                <MenuItem value='male'>Masculino</MenuItem>
                                <MenuItem value='female'>Feminino</MenuItem>
                        </Select>
                    </Grid>
                
                <Grid item xs={6}>
                        <InputLabel id="order-filter">Ordenar por</InputLabel>
                        <Select
                            labelId="order-filter"
                            id="demo-order-select"
                            value={filters.sortBy}
                            onChange={handleSort}
                        >
                            <MenuItem value='date'>Data</MenuItem>
                            <MenuItem value='alphabetical'>Ordem alfabética</MenuItem>

                        </Select>
                </Grid>
             
                <Grid item xs={6}>
                <InputLabel id="month-filter">Filtrar por mês de nascimento</InputLabel>
                    <Select
                        labelId="month-filter"
                        id="demo-order-select"
                        value={filters.month}
                        onChange={handleMonth}
                    >
                        <MenuItem value='all'>Todos</MenuItem>
                        <MenuItem value='jan'>Janeiro</MenuItem>
                        <MenuItem value='feb'>Fevereiro</MenuItem>
                        <MenuItem value='march'>Março</MenuItem>
                       
                        <MenuItem value='apr'>April</MenuItem>
                        <MenuItem value='ma'>Maio</MenuItem>
                        <MenuItem value='ju'>Junho</MenuItem>
                        <MenuItem value='jul'>Julho</MenuItem>
                        <MenuItem value='aug'>Agosto</MenuItem>
                        <MenuItem value='set'>Setembro</MenuItem>
                        <MenuItem value='oct'>Outrubro</MenuItem>
                        <MenuItem value='nov'>Novembro</MenuItem>
                        <MenuItem value='dez'>Dezembro</MenuItem>
                    </Select>
                    </Grid>
                    <Grid item xs={6}>
                        <InputLabel id="age-filter">Filtrar por idade</InputLabel>
                        <Select
                            labelId="age-filter"
                            id="demo-age-select"
                            value=''
                            onChange={handleAge}
                        >
                            <MenuItem value='range-default'>Todos</MenuItem>
                            <MenuItem value='range-1'>0 a 15</MenuItem>
                            <MenuItem value='range-2'>16 31</MenuItem>
                            <MenuItem value='range-3'>32 a 46</MenuItem>
                            <MenuItem value='range-4'>47 a 62</MenuItem>
                            <MenuItem value='range-5'>63 76</MenuItem>
                            <MenuItem value='range-6'>77 a 82</MenuItem>
                            <MenuItem value='range-7'>83 a 100</MenuItem>
                            <MenuItem value='range-8'>100+</MenuItem>

                        </Select>
                    </Grid>
        
            
                
                
                <Grid container justify="center" alignItems="center">
                    <Button variant="contained" color="primary" onClick={handleClear}>Limpar filtros</Button>
                </Grid>
             </Grid>
         
    )
}

export default ContactFilters