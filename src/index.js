import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter, { history } from './router/AppRouter'
import LoadingPage from './components/LoadingPage'
import { startSetContacts } from './actions/contacts'
import { firebase } from './firebase/firebase'
import { login, logout, saveUserData } from './actions/auth'

import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import './styles/main.scss'

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)



let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        hasRendered = true
        ReactDOM.render(jsx, document.getElementById("app"))
    }
}

ReactDOM.render(<LoadingPage />, document.getElementById("app"))




firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log("Logged in!")
        store.dispatch(login(user.uid))
        const { displayName, photoURL } = user
        const newUserData = {
            displayName,
            photoURL
        }
        store.dispatch(saveUserData(newUserData))
        console.log(user.displayName, user.photoURL)
        store.dispatch(startSetContacts()).then(() => {
            renderApp()
            if (history.location.pathname === '/') {
                history.push('/dashboard')
            }
        })

    } else {
        store.dispatch(logout())
        renderApp()
        history.push('/')
        console.log("Logged out!")
    }
})
