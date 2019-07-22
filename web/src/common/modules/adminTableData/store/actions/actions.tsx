import * as api from '../../service/api';
import {asyncActionCreator} from '../../../../../utilities/asyncActions';
import {GET_ADMIN_TABLE_DATA} from './types';
import {NormalizedTableResponse, table} from '../../../../../modules/table/schema/table';
import {normalize} from 'normalizr';

export function getAdminTableData(tableName: string) {
    return asyncActionCreator<typeof GET_ADMIN_TABLE_DATA, NormalizedTableResponse, any>(
        GET_ADMIN_TABLE_DATA,
        api.getTable(tableName)
            .then(response => {
                return normalize(response.data, table);
            }),
        {tableName}
    );
}
