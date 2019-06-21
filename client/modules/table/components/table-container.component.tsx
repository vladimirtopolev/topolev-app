import {connect} from 'react-redux';
import Table from './table.component';
import * as React from 'react';
import {match} from 'react-router-dom';
import {Dispatch} from 'redux';

interface RouteParams {
    tableName: string,
}

interface TableContainerProps {
    match: match<{ [K in keyof RouteParams]?: string }>
    dispatch: Dispatch
}

class TableContainerComponent extends React.Component<TableContainerProps> {
    componentDidMount() {
        const {tableName} = this.props.match.params;
    }
}

const mapStateToProps = (state: any) => {
    return state;
};

export default connect(mapStateToProps)(Table);
