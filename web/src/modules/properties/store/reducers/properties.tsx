import {Reducer} from 'redux';
import {AsyncAction, AsyncActionStatus, SucceededAsyncAction} from '../../../../utilities/asyncActions';


import {GET_PROPERTIES} from '../actions/types';
import {Property} from '../../schema/models';
import {Params} from '../../../table/store/actions/actions';

type GetPropertiesActionSuccess = SucceededAsyncAction<typeof GET_PROPERTIES, Property[], Params>;

const orderedCalls: Reducer<Property[], AsyncAction<any, any>> = (state = [], action) => {
    if (action.type === GET_PROPERTIES) {
        switch (action.status) {
            case AsyncActionStatus.SUCCEEDED:
                return requestOrderedCalls(state, action as GetPropertiesActionSuccess);
            default:
                return state;
        }
    }
    return state;
};

const requestOrderedCalls = (state: Property[], action: GetPropertiesActionSuccess):Property[] => {
    return action.payload;
};

export default orderedCalls;


//selectors
export const getProperties = (state: any) => {
    return state;
};
