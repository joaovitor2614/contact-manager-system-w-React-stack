import React, { useState, useEffect } from 'react'
import { Link as RouterLink, useHistory } from 'react-router-dom'
import { startLogout } from '../actions/auth'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton';
const useStyles = makeStyles(() => ({
    header: {
       backgroundColor: "#400CCC",
       paddingRight: "79px",
       paddingLeft: "118px",
       "@media (max-width: 900px)": {
      paddingLeft: 0,
      },
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
  },
  drawerContainer: {
    padding: "20px 30px",
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



const Header = () => {
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false
  })
const { mobileView, drawerOpen } = state;
const { header, logo, menuButton, toolbar, drawerContainer } = useStyles();
const history = useHistory();
const goDashboard = () => {
    history.push('/dashboard')
}
  
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    
    window.addEventListener("resize", () => setResponsiveness());
    return () => setResponsiveness 
  }, []);
   
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

  
const getDrawerChoices = () => {
  return headersData.map(({ label, href }) => {
    return (
      <Button
        {...{
          component: RouterLink,
          to: href,
          color: "inherit",
          style: { textDecoration: "none" },
          component: RouterLink,
          key: label
        }}
      >
        <MenuItem>{label}</MenuItem>
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
      const displayMobile = () => {
        const handleDrawerOpen = () => {
          setState((prevState) => ({ ...prevState, drawerOpen: true }));
        }
        const handleDrawerClose = () => {
          setState((prevState) => ({ ...prevState, drawerOpen: false }));
        }
        return (
          <Toolbar>
            <IconButton
                {...{
                  edge: "start",
                  color: "inherit",
                  "aria-label": "menu",
                  "aria-haspopup": "true",
                  onClick: handleDrawerOpen,
                }}
              >
                <MenuIcon />
            </IconButton>
                  <Drawer
                {...{
                  anchor: "left",
                  open: drawerOpen,
                  onClose: handleDrawerClose,
                }}
              >
                 {getDrawerChoices()}
              </Drawer>
            <div>{Dashboardlogo}</div>
        </Toolbar>
        );
      }


 
    return (
         <header>
            <AppBar className={header}>{mobileView ? displayMobile() : displayDesktop()}</AppBar>
         </header>
    )
}

export default Header
