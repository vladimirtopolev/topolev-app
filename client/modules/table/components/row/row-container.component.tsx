import * as React from 'react';
import * as selectors from '../../store/reducers/index';
import {match, withRouter} from 'react-router';
import {Header, Locale, Row, TableMeta} from '../../schema/models';
import {getTableHeaders, getTableRow} from '../../store/actions/actions';
import {connect} from 'react-redux';
import TableRow from './row.component';
import {locales} from '../table/table-container.component';
import {History} from 'history';

interface RouteParams {
    tableName: string,
    locale: string,
    rowId: string
}

interface TableRowContainerProps {
    match: match<{ [K in keyof RouteParams]?: string }>,
    history: History,
    dispatch: any,
    headers: Header[],
    row: Row,
    tableMeta: TableMeta,
    taskStatuses: any,
    locale: Locale,
    goBack: () => void
}

const mapStateToProps = (state: any, ownProps: TableRowContainerProps) => {
    const {tableName, rowId, locale} = ownProps.match.params;
    return {
        headers: selectors.getTableHeaders(state, tableName),
        row: selectors.getTableRow(state, tableName, rowId),
        taskStatuses: selectors.getAsyncTaskStatuses(state),
        locale: locales.find(l => l.key === locale),
        goBack: () => ownProps.history.push(`/tables/${tableName}`)
    };
};

class TableRowContainerComponent extends React.Component<TableRowContainerProps> {
    componentDidMount() {
        const {tableName, rowId} = this.props.match.params;
        this.props.dispatch(getTableHeaders(tableName));
        if (rowId !== 'new') {
            this.props.dispatch(getTableRow(tableName, rowId));
        }
    }

    render() {
        const {headers, row, locale, goBack} = this.props;
        return <TableRow headers={headers} row={row} saveRow={() => {}} locale={locale} goBack={goBack}/>;
    }
}

export default withRouter<any>(connect(mapStateToProps)(TableRowContainerComponent));
