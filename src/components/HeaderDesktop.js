import React from 'react'
import { Link as RouterLink, useHistory } from 'react-router-dom'
import { startLogout } from '../actions/auth'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
    header: {
       backgroundColor: "#400CCC",
       paddingRight: "79px",
       paddingLeft: "118px",
    },
     logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "left",
    cursor: "pointer"
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
 },
 toolbar: {
    display: "flex",
    justifyContent: "space-between",
  }
 }));

 const headersData = [
    {
      label: "Novo contato",
      href: "/create",
    },
    {
      label: "Lista",
      href: "/list",
    },
    
    {
      label: "Log Out",
      href: "/logout",
    }
  ];



const HeaderDesktop = () => {
    const { header, logo, menuButton, toolbar } = useStyles();
   const history = useHistory();
   const goDashboard = () => {
       history.push('/dashboard')
   }
  const Dashboardlogo = (
    <Typography onClick={goDashboard} variant="h6" component="h1"  className={logo}>
      Dashboard
    </Typography>
  )
   

        const getMenuButtons = () => {
        return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
            className: menuButton
          }}
        >
          {label}
        </Button>
      );
    });
  };

    const displayDesktop = () => {
        return (<Toolbar className={toolbar}>
                {Dashboardlogo}
                <div>{getMenuButtons()}</div>
                </Toolbar>
        )
      };
 
    return (
         <header>
            <AppBar className={header}>{displayDesktop()}</AppBar>
         </header>
    )
}

export default HeaderDesktop
