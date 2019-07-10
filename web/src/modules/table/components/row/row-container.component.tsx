import * as React from 'react';
import * as selectors from '../../store/reducers/index';
import {match, withRouter} from 'react-router';
import {Header, Locale, Row, TableMeta} from '../../schema/models';
import {getTableHeaders, getTableRow, updateTableRow, saveTableRow} from '../../store/actions/actions';
import {connect} from 'react-redux';
import TableRow from './row.component';
import {locales} from '../table/table-container.component';
import {History} from 'history';

interface RouteParams {
    tableName: string,
    locale: string,
    rowId: string,
    match: match<{ [K in keyof RouteParams]?: string }>,
    history: History,
}

export interface TableRowContainerProps extends RouteParams {
    dispatch: any,
    headers: Header[],
    row: Row,
    tableMeta: TableMeta,
    taskStatuses: any,
    localeItem: Locale,
    goBack: () => void

    getTableHeaders: () => void,
    getTableRow: () => void,
    saveTableRow: (row: Row) => void,
    updateTableRow: (row: Row) => void
}

const mapStateToProps = (state: any, ownProps: RouteParams) => {
    const {tableName, rowId, locale} = ownProps.match.params;
    return {
        tableName,
        rowId,
        headers: selectors.getTableHeaders(state, tableName),
        row: selectors.getTableRow(state, tableName, rowId),
        taskStatuses: selectors.getAsyncTaskStatuses(state),
        localeItem: locales.find(l => l.key === locale)
    };
};

const mapDispatchToProps = (dispatch: any, ownProps: RouteParams) => {
    const {tableName, rowId} = ownProps.match.params;
    return {
        getTableHeaders: () => dispatch(getTableHeaders(tableName)),
        getTableRow: () => dispatch(getTableRow(tableName, rowId)),
        saveTableRow: (row: Row) => dispatch(saveTableRow(tableName, row)),
        updateTableRow: (row: Row) => dispatch(updateTableRow(tableName, rowId, row)),
        goBack: () => ownProps.history.push(`/admin/tables/${tableName}`)
    };
};

export default withRouter<any>(connect(mapStateToProps, mapDispatchToProps)(TableRow));
