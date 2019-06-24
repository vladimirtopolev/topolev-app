import {tables} from './tables';
import {combineReducers} from 'redux';
import {AsyncAction} from '../../../../utilities/asyncActions';
import {GET_TABLE_ACTION, GET_TABLE_HEADERS_ACTION, GET_TABLE_ROWS_ACTION} from '../actions/types';

const asyncStatuses = (state: any = {}, action: AsyncAction<typeof GET_TABLE_ACTION>) => {
    if (
        action.type === GET_TABLE_ACTION
        || action.type === GET_TABLE_HEADERS_ACTION
        || action.type === GET_TABLE_ROWS_ACTION
    ) {
        return {...state, [action.type]: action.status};
    }
    return state;
};

const rootReducer = combineReducers({
    tables,
    asyncStatuses
});

export default rootReducer;

export type TableModuleState = ReturnType<typeof rootReducer>;
