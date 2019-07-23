import * as React from 'react';
import {useEffect} from 'react';
import {connect} from 'react-redux';
import {getAdminTableData} from '../modules/adminTableData/store/actions/actions'
import * as fromAdminTableData from '../../store/reducers';
import {Row} from '../../modules/table/schema/models';

interface WithDispatchFunction {
    dispatch: any
}

export interface WithAdminTableDataHoc{
    adminTableData: Row[];
}


export default function withAdminTableData<PROPS>(tableName: string) {
    const mapStateToProps = (state: any):WithAdminTableDataHoc => {
        return {
            adminTableData: fromAdminTableData.getAdminTableRowsData(state, tableName)
        };
    };

    return (OriginComponent: React.ComponentType<PROPS>) => {
        const DecoratedComponent = (props: PROPS & WithDispatchFunction & WithAdminTableDataHoc) => {
            useEffect(() => {
                props.dispatch(getAdminTableData(tableName));
            }, []);
            return <OriginComponent {...props}/>
        };
        return connect(mapStateToProps)(DecoratedComponent);
    };
}

