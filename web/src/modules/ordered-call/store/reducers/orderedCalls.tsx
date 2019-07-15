import {Reducer} from 'redux';
import {AsyncAction, AsyncActionStatus, SucceededAsyncAction} from '../../../../utilities/asyncActions';


import {GET_ORDERED_CALLS} from '../actions/types';
import {OrderedCall} from '../../schema/orderedCall';
import {NormalizedTableResponse} from '../../../table/schema/table';
import {Params} from '../../../table/store/actions/actions';
import {act} from 'react-dom/test-utils';


type GetOrderedCallsActionSuccess = SucceededAsyncAction<typeof GET_ORDERED_CALLS, OrderedCall[], Params>;

const orderedCalls: Reducer<OrderedCall[], AsyncAction<any, any>> = (state = [], action) => {
    if (action.type === GET_ORDERED_CALLS) {
        switch (action.status) {
            case AsyncActionStatus.SUCCEEDED:
                return requestOrderedCalls(state, action as GetOrderedCallsActionSuccess);
            default:
                return state;
        }
    }
    return state;
};

const requestOrderedCalls = (state: OrderedCall[], action: GetOrderedCallsActionSuccess):OrderedCall[] => {
    return state.concat(action.payload);
};

export default orderedCalls;


//selectors
export const getOrderedCalls = (state: any) => {
    return state;
};

export const getGroupedOrderedCalls = (state: OrderedCall[]) => {
    return state.reduce((memo: any, orderedCall) => ({
        ...memo,
        [orderedCall.status]: (memo[orderedCall.status] || []).concat(orderedCall)
    }), {});
};
