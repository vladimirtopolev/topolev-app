import {asyncActionCreator} from '../../../../utilities/asyncActions';
import {GET_ORDERED_CALLS} from '../actions/types';
import * as api from '../../service/api'
import {OrderedCall} from '../../schema/orderedCall';
export const MODULE_NAME = 'tableModule';

export function getOrderedCalls() {
    return asyncActionCreator<typeof GET_ORDERED_CALLS, OrderedCall[], any>(
        GET_ORDERED_CALLS,
        api.getOrderedCalls()
            .then(response => {
                return response.data
            }),
        {moduleName: MODULE_NAME}
    );
}
