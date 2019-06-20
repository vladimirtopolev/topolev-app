import {adminTable} from './adminTable';
import {combineReducers} from 'redux';

export const rootReducer = combineReducers({
    adminTable
});

export type TableModuleState = ReturnType<typeof rootReducer>;