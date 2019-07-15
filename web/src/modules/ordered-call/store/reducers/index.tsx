import {combineReducers} from 'redux';

import orderedCalls, * as fromOrderedCalls from './orderedCalls';
import {MODULE_NAME} from '../../constants';

const rootReducer = combineReducers({
    orderedCalls
});

export default rootReducer;


// selectors
export const getOrderedCalls = (state: any) =>
    fromOrderedCalls.getOrderedCalls(state[MODULE_NAME].orderedCalls);

export const getGroupedOrderedCalls = (state: any) =>
    fromOrderedCalls.getGroupedOrderedCalls(state[MODULE_NAME].orderedCalls);

