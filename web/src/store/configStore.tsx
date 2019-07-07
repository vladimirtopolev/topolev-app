import {combineReducers, createStore, Store, applyMiddleware} from 'redux';
import staticReducers from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';

export interface StoreWithAsyncReducers extends Store {
    asyncReducers?: { [k: string]: any },
}


const getInitStore = (): { [K: string]: any } => {
    return {
        auth: localStorage.getItem('auth')
            ? JSON.parse(localStorage.getItem('auth'))
            : {
                auth: null,
                asyncStatuses: {}
            }
    };
};

const createReducer = (asyncReducers?: any) => {
    return combineReducers({
        ...staticReducers,
        ...asyncReducers
    });
}

const store: StoreWithAsyncReducers = createStore(
    createReducer(),
    getInitStore(),
    composeWithDevTools(applyMiddleware(thunk, logger)));

store.asyncReducers = {};

// save each changes in store in localStorage
store.subscribe(() => {
    localStorage.setItem('auth', JSON.stringify(store.getState().auth));
});





export const replaceReducer = (asyncReducers: any) => {
    return combineReducers({
        ...staticReducers,
        ...asyncReducers
    });
};

export const injectReducer = (key: string, reducer: any) => {
    if (Object.hasOwnProperty.call(store.asyncReducers, key)) return;

    store.asyncReducers[key] = reducer;
    store.replaceReducer(replaceReducer(store.asyncReducers));
};

export default () => store;

