import React, { useEffect } from 'react';
import axios from 'axios'
import moment from 'moment'
import { Router, Route, Switch, Link, NavLink, useHistory } from 'react-router-dom';
import { timestamp } from '../firebase/firebase'
import { useSelector, useDispatch } from 'react-redux'
import { createBrowserHistory } from "history";
import { saveUsers } from '../actions/contacts'
import useFetchUsers from '../hooks/useFetchUsers'
import DashboardPage from '../components/DashboardPage';
import LoginPage from '../components/LoginPage';
import ContactList from '../components/ContactList'
import AddContactPage from '../components/AddContactPage'
import EditContactPage from '../components/EditContactPage'
import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'
import LogoutPage from '../components/LogoutPage'


export const history = createBrowserHistory()


const AppRouter = () => {


    const dispatch = useDispatch()
    const callApi = async () => {
        const res = await axios.get('https://6042ac307f50e000173ac863.mockapi.io/api/contacts/contacts')
        const users = res.data[0].contacts
        console.log(users)
        users.forEach((user) => {
            user.createdAt = timestamp();
            dispatch(saveUsers(user))
        })  
    }
    useEffect(() => {
         callApi();
        return () => callApi
    }, [])
   
   
    /*if (users.length === 11) {
        users.forEach((user) => {
            user.createdAt = moment();
            dispatch(saveUsers(user))
        })
    }
    */
    

    




    return (
        <Router history={history}>
            <div>

                <Switch>
                    <PublicRoute path="/" component={LoginPage} exact={true} />
                    <PrivateRoute path="/dashboard" component={DashboardPage} />
                    <PrivateRoute path="/list" component={ContactList} />
                    <PrivateRoute path="/create" component={AddContactPage} />
                    <PrivateRoute path="/logout" component={LogoutPage} />
                    <PrivateRoute path="/edit/:id" component={EditContactPage} />


                </Switch>

            </div>


        </Router>
    )
}

export default AppRouter;
