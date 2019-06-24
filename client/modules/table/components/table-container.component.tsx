import {connect} from 'react-redux';
import * as React from 'react';
import {match, withRouter} from 'react-router-dom';
import {getTableHeaders, getTableRows} from '../store/actions/actions';

interface RouteParams {
    tableName: string,
}

interface TableContainerProps {
    match: match<{ [K in keyof RouteParams]?: string }>,
    dispatch: any,
    getTable: () => void
}

class TableContainerComponent extends React.Component<TableContainerProps> {
    componentDidMount() {
        const {tableName} = this.props.match.params;
        this.props.dispatch(getTableHeaders(tableName));
        this.props.dispatch(getTableRows(tableName))
    }

    render(){
        return (<div>test</div>)
    }
}

const mapStateToProps = (state: any) => {
    return state;
};


export default withRouter<any>(connect(mapStateToProps)(TableContainerComponent));
