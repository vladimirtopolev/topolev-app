var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { combineReducers, createStore, applyMiddleware } from 'redux';
import staticReducers from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
var getInitStore = function () {
    return {
        auth: localStorage.getItem('auth')
            ? JSON.parse(localStorage.getItem('auth'))
            : {
                auth: null,
                asyncStatuses: {}
            }
    };
};
var createReducer = function (asyncReducers) {
    return combineReducers(__assign({}, staticReducers, asyncReducers));
};
var store = createStore(createReducer(), getInitStore(), composeWithDevTools(applyMiddleware(thunk, logger)));
store.asyncReducers = {};
// save each changes in store in localStorage
store.subscribe(function () {
    localStorage.setItem('auth', JSON.stringify(store.getState().auth));
});
export var replaceReducer = function (asyncReducers) {
    return combineReducers(__assign({}, staticReducers, asyncReducers));
};
export var injectReducer = function (key, reducer) {
    if (Object.hasOwnProperty.call(store.asyncReducers, key))
        return;
    store.asyncReducers[key] = reducer;
    store.replaceReducer(replaceReducer(store.asyncReducers));
};
export default (function () { return store; });
//# sourceMappingURL=configStore.js.map