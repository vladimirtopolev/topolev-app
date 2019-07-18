import * as api from '../../service/api';
import {asyncActionCreator} from '../../../../utilities/asyncActions';
import {GET_PROPERTIES} from './types';
import {Property} from '../../schema/models';
import {MODULE_NAME} from '../../constants';

export type Params = {
    moduleName: string,
}

export function getProperties() {
    return asyncActionCreator<typeof GET_PROPERTIES, Property[], Params>(
        GET_PROPERTIES,
        api.getProperies()
            .then(response => {
                return response.data;
            }),
        {moduleName: MODULE_NAME}
    );
}
