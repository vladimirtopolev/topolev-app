import {combineReducers, createStore, Store, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

export interface StoreWithAsyncReducers extends Store {
    asyncReducers?: { [k: string]: any },
    injectReducer?: (key: string, reducer: any) => void
}

const store: StoreWithAsyncReducers = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)));
store.asyncReducers = {};


export const replaceReducer = (asyncReducers: any) => {
    return combineReducers({
        rootReducer,
        ...asyncReducers
    })
};

export const injectReducer = (key: string, reducer: any) => {
    if (Object.hasOwnProperty.call(store.asyncReducers, key)) return;

    store.asyncReducers[key] = reducer;
    replaceReducer(store.asyncReducers);
};

export default () => store;

