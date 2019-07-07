import {connect} from 'react-redux';
import * as React from 'react';
import {match, withRouter} from 'react-router-dom';
import * as selectors from '../../store/reducers/index';
import {GET_TABLE_HEADERS_ACTION, GET_TABLE_ROWS_ACTION} from '../../store/actions/types';
import Table from './table.component';
import LocaleTabsRenderer from '../../../../common/elements/locale-tabs-renderer.component';
import {Header, Locale, Row, TableMeta} from '../../schema/models';
import {getTableHeaders, getTableRows} from '../../store/actions/actions';


export const locales: Locale[] = [
    {
        key: 'ru',
        name: 'RU',
        title: 'Русский'
    },
    {
        key: 'en',
        name: 'EN',
        title: 'Английский'
    }
];

interface RouteParams {
    tableName: string,
}

interface TableContainerProps {
    match: match<{ [K in keyof RouteParams]?: string }>,
    dispatch: any,
    locales: Locale[],
    headers: Header[],
    rows: Row[],
    tableMeta: TableMeta,
    taskStatuses: any,
    domainPath: string
}

class TableContainerComponent extends React.Component<TableContainerProps> {
    componentDidMount() {
        const {tableName} = this.props.match.params;
        this.props.dispatch(getTableHeaders(tableName));
        this.props.dispatch(getTableRows(tableName));
    }

    render() {
        const {tableMeta, headers, rows, locales, domainPath} = this.props;
        if (this.props.taskStatuses[GET_TABLE_HEADERS_ACTION] === 'SUCCEEDED') {
            return <LocaleTabsRenderer
                locales={locales}
                renderLocaleTab={
                    locale => <Table domainPath={domainPath}
                                     tableMeta={tableMeta}
                                     headers={headers}
                                     rows={rows}
                                     locale={locale}/>}/>;
        }
        return 'Loading....';
    }
}

const mapStateToProps = (state: any, ownProps: TableContainerProps) => {
    const {tableName} = ownProps.match.params;
    return {
        headers: selectors.getTableHeaders(state, tableName),
        locales: locales,
        rows: selectors.getTableRows(state, tableName),
        tableMeta: selectors.getTableMeta(state, tableName),
        taskStatuses: selectors.getAsyncTaskStatuses(state),
        domainPath: ownProps.domainPath
    };
};


export default withRouter<any>(connect(mapStateToProps)(TableContainerComponent));
