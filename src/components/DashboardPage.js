import React from 'react'
import { useSelector } from 'react-redux'
import contactsBalance from '../selectors/contacts-total'
import { makeStyles } from '@material-ui/core/styles';
import { saveUsers } from '../actions/contacts'
import useFetchUsers from '../hooks/useFetchUsers'
import MyResponsivePie from './graph/ResponsivePie'
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
    
    pageContent: {
        margin: theme.spacing(4),
        padding: theme.spacing(3),
        marginTop: theme.spacing(13),
        flexGrow: 1
    },
    pageContent2: {
        margin: theme.spacing(4),
        padding: theme.spacing(3),
      
      
    },
    grid: {
        justify: 'center',
        alignItems: 'center',
    
    }
    
    
  }));


const DashboardPage = () => {
    const contacts = useSelector(state => state.contacts)
    const auth = useSelector(state => state.auth)

    let { contactsTotal, totalMale, totalFemale } = contactsBalance(contacts)
    console.log(totalMale)
    const data = [
        {
            "id": "Mulheres",
            "label": "Mulheres",
            "value": totalFemale,
            "color": "hsl(291, 70%, 50%)"
        },
        {
            "id": "Homens",
            "label": "Homens",
            "value": totalMale,
            "color": "hsl(351, 70%, 50%)"
        }
    ]


    const { pageContent, pageContent2, grid } = useStyles()
    return (
        <div style={{ height: '800px' }}>
            {auth.data[0] && (
                <Paper elevation={1} className={pageContent}>
                <Grid className={grid} container>
                    
                    <Grid  item xs={4}>
                        <h3>{auth.data[0].displayName}</h3>
                    </Grid>
                    <Grid item xs={4}>
                        <img className='img-table' src={auth.data[0].photoURL} alt="account pic"
                        />
                    </Grid>
                    
                    <Grid  item xs={4}>
                        <HomeIcon />
                    </Grid>
                    <Grid item xs={4}>
                        <h4>Contatos: {contactsTotal}</h4>
                    </Grid>
                   
                </Grid>
                </Paper>
            )

            }
            
        
                    <Paper elevation={3} className={pageContent2}>
                        <Grid container justify="center" alignItems="center">
                            <h3>Quantidades de pessoas por gênero</h3>
                        </Grid>
                        
                    </Paper>
                    
                        
            
            <div style={{ height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <MyResponsivePie data={data} />
            </div>
            
            
            
           
           

        </div>
    )
}


export default DashboardPage