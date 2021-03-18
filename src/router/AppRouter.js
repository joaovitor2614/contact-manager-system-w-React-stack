import React from 'react';
import axios from 'axios'
import moment from 'moment'
import { Router, Route, Switch, Link, NavLink, useHistory } from 'react-router-dom';

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


export const history = createBrowserHistory()


const AppRouter = () => {

    const BASE_URL = 'https://dummyapi.io/data/api';
    const APP_ID = '6052995d4eec71ebefc8d582'
    const dispatch = useDispatch()
    const contacts = useSelector(state => state.contacts)

    const callApi = async () => {
        const res = await axios.get(`${BASE_URL}/user`, { headers: { 'app-id': APP_ID } })
        const data = res.data.data;
        const fakeUsers = data.slice(1, 6)
        fakeUsers.forEach((user) => {
            user.createdAt = moment();
            dispatch(saveUsers(user))


        })

    }
    if (contacts.length === 0) {
        callApi();
    }





    return (
        <Router history={history}>
            <div>

                <Switch>
                    <PublicRoute path="/" component={LoginPage} exact={true} />
                    <PrivateRoute path="/dashboard" component={DashboardPage} />
                    <PrivateRoute path="/list" component={ContactList} />
                    <PrivateRoute path="/create" component={AddContactPage} />
                    <PrivateRoute path="/edit/:id" component={EditContactPage} />


                </Switch>

            </div>


        </Router>
    )
}

export default AppRouter;
