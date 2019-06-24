import {connect} from 'react-redux';
import * as React from 'react';
import {match, withRouter} from 'react-router-dom';
import * as selectors from '../store/reducers';
import {GET_TABLE_ACTION, GET_TABLE_HEADERS_ACTION, GET_TABLE_ROWS_ACTION} from '../store/actions/types';
import Table from './table.component';
import {Header, Row} from '../schema/models';
import {getTableHeaders, getTableRows} from '../store/actions/actions';

interface RouteParams {
    tableName: string,
}

interface TableContainerProps {
    match: match<{ [K in keyof RouteParams]?: string }>,
    dispatch: any,
    headers: Header[],
    rows: Row[],
    taskStatuses: any
}

class TableContainerComponent extends React.Component<TableContainerProps> {
    componentDidMount() {
        const {tableName} = this.props.match.params;
        this.props.dispatch(getTableHeaders(tableName));
        this.props.dispatch(getTableRows(tableName))
    }

    render() {
        if (this.props.taskStatuses[GET_TABLE_HEADERS_ACTION] === 'SUCCEEDED') {
            return <Table headers={this.props.headers} rows={this.props.rows}/>
        }
        return 'Loading....'
    }
}

const mapStateToProps = (state: any, ownProps: TableContainerProps) => {
    const {tableName}  =  ownProps.match.params;
    return {
        headers: selectors.getTableHeaders(state, tableName),
        rows: selectors.getTableRows(state, tableName),
        taskStatuses: selectors.getAsyncTaskStatuses(state)
    };
};


export default withRouter<any>(connect(mapStateToProps)(TableContainerComponent));
