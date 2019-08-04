import * as React from 'react';
import {useEffect} from 'react';
import * as fromAdminTableData from '../../../../store/reducers';
import {getAdminTableData} from '../store/actions/actions'
import {connect} from 'react-redux';

const AdminTableEntityRows =  ({RowsRenderer, dispatch, tableName, rows}: any) => {
    useEffect(() => {
        dispatch(getAdminTableData(tableName));
    }, [tableName]);

    console.log('TABLE NAME', tableName);
    return <RowsRenderer rows={rows} tableName={tableName}/>
};

const mapStateToProps = (state:any, ownProps:any) => {
    return {
        rows: fromAdminTableData.getAdminTableRowsData(state, ownProps.tableName),
        tableName: ownProps.tableName
    }
};

export default connect(mapStateToProps)(AdminTableEntityRows);
