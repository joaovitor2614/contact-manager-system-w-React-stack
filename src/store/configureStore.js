import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import ContactsReducer from '../reducers/contacts'
import FiltersReducer from '../reducers/filters'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            contacts: ContactsReducer,
            filters: FiltersReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};