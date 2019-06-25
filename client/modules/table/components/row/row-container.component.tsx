import * as React from 'react';
import * as selectors from '../../store/reducers/index';
import {match, withRouter} from 'react-router';
import {Header, Row, TableMeta} from '../../schema/models';
import {getTableHeaders, getTableRow} from '../../store/actions/actions';
import {connect} from 'react-redux';
import TableRow from './row.component';

interface RouteParams {
    tableName: string,
    rowId: string
}

interface TableRowContainerProps {
    match: match<{ [K in keyof RouteParams]?: string }>,
    dispatch: any,
    headers: Header[],
    row: Row,
    tableMeta: TableMeta,
    taskStatuses: any
}

const mapStateToProps = (state: any, ownProps: TableRowContainerProps) => {
    const {tableName, rowId} = ownProps.match.params;
    return {
        headers: selectors.getTableHeaders(state, tableName),
        row: selectors.getTableRow(state, tableName, rowId),
        taskStatuses: selectors.getAsyncTaskStatuses(state)
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
        console.log('PROPS', this.props);
        const {headers, row} = this.props;
        return <TableRow headers={headers} row={row}/>
    }
}

export default withRouter<any>(connect(mapStateToProps)(TableRowContainerComponent));
