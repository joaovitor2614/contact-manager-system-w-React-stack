import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './router/AppRouter'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import './styles/main.scss'

const store = configureStore();



const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)
ReactDOM.render(jsx, document.getElementById("app"))