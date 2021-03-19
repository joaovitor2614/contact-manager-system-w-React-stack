import React from 'react'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { startLogin, startLoginGit } from '../actions/auth'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from 'react-redux'
import bg from '../assets/bg2.jpg'

const useStyles = makeStyles((theme) => ({
    
    pageContent: {
        margin: theme.spacing(4),
        padding: theme.spacing(3),
        marginTop: theme.spacing(9),
      
    },
    paperContainer: {
        backgroundImage: `url(${bg})`,
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justify: 'center'

    },
    grid: {
        display: 'flex',
        justify: 'center',
        alignItems: 'center'
    }
    
    
  }));



const LoginPage = () => {
    const { pageContent, grid, paperContainer } = useStyles()
    const dispatch = useDispatch();
    const handleGoogle = () => {
        dispatch(startLogin())
    }
    const handleGit = () => {
        dispatch(startLoginGit())
    }


    return (

        <Grid container className={paperContainer}>
             
                        <Paper elevation={1} className={pageContent}>
                            <Grid container  justify="center" alignItems="center" className={grid}>
                            <Grid item xs={12}>
                                <h1>Sistema de contatos</h1>
                            </Grid>
                            <Grid item xs={12}>
                                <h3>Gerencie seus contatos de uma forma simples!</h3>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography component="div">
                                    <Button variant="contained" color="primary" onClick={handleGoogle}>
                                            Login com Google</Button>
                                        <Button variant="contained" color="secondary" onClick={handleGit}>
                                            Login com Github
                                    </Button>
                                </Typography>
                            </Grid>
                            
                    

                            </Grid>
                        </Paper>
                       
                     
                                 
                
                    </Grid>                      
     

    )
}


export default LoginPage