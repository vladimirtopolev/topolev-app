import {adminTable} from './adminTable';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    adminTable
});

export default rootReducer;

export type TableModuleState = ReturnType<typeof rootReducer>;
