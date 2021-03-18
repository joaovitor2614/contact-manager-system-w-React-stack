import React from 'react';
import axios from 'axios'
import moment from 'moment'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { saveUsers } from '../actions/contacts'
import useFetchUsers from '../hooks/useFetchUsers'
import DashboardPage from '../components/DashboardPage';
import ContactList from '../components/ContactList'
import AddContactPage from '../components/AddContactPage'
import EditContactPage from '../components/EditContactPage'
import Header from '../components/Header'





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
        <BrowserRouter >
            <div>
                <Header />
                <Switch>

                    <Route path="/" component={DashboardPage} exact={true} />
                    <Route path="/list" component={ContactList} />
                    <Route path="/create" component={AddContactPage} />
                    <Route path="/edit/:id" component={EditContactPage} />


                </Switch>

            </div>


        </BrowserRouter>
    )
}

export default AppRouter;
