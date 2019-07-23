import * as React from 'react';
import {useEffect} from 'react';
import {connect} from 'react-redux';
import {getAdminTableRow} from '../store/actions/actions'
import {match, withRouter} from 'react-router';
import * as fromAdminTableData from '../../../../store/reducers';

interface RouteParams {
    tableEntityRowId: string,
}

interface TableContainerProps {
    match: match<{ [K in keyof RouteParams]?: string }>,
    dispatch: any,
    RowRenderer: any,
    rowId: string,
    tableName: string,
    row: any
}

const AdminTableEntityRow = ({RowRenderer, dispatch, tableName, rowId, row}: TableContainerProps) => {
    useEffect(() => {
        dispatch(getAdminTableRow(tableName, rowId))
    }, [tableName, rowId]);

    return <RowRenderer row={row}/>
};

const mapStateToProps = (state: any, ownProps: TableContainerProps) => {
    console.log('OWNS', ownProps);
    const rowId = ownProps.match.params.tableEntityRowId;
    return {
        rowId,
        row: fromAdminTableData.getAdminTableRowData(state, ownProps.tableName, rowId)
    };
};

export default withRouter<any>(connect(mapStateToProps)(AdminTableEntityRow));
