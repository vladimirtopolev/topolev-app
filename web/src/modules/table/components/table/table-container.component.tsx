import * as React from 'react';
import {connect} from 'react-redux';
import {useEffect} from 'react';
import {match, withRouter} from 'react-router-dom';
import * as selectors from '../../store/reducers/index';
import {GET_TABLE_HEADERS_ACTION, GET_TABLE_ROWS_ACTION} from '../../store/actions/types';
import Table from './table.component';
import LocaleTabsRenderer from '../../../../common/elements/locale-tabs-renderer.component';
import {Header, Locale, Row, TableMeta} from '../../schema/models';
import {getTableHeaders, getTableRows, deleteTableRow} from '../../store/actions/actions';
import WithSpinner from '../../../../common/helpers/with-spinner.render-props-component';

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
    domainPath: string,
    tableName: string
    isLoading: boolean
}


const TableContainerComponent = ({tableMeta, headers, rows, locales, domainPath, dispatch, tableName, taskStatuses, isLoading}: TableContainerProps) => {
    useEffect(() => {
        dispatch(getTableHeaders(tableName));
        dispatch(getTableRows(tableName));
    }, []);


    return (
        <WithSpinner isLoading={isLoading}>
            {() =>
                <LocaleTabsRenderer
                    locales={locales}
                    renderLocaleTab={
                        locale => <Table domainPath={domainPath}
                                         tableMeta={tableMeta}
                                         headers={headers}
                                         rows={rows}
                                         deleteRow={(rowID: string) => dispatch(deleteTableRow(tableName, rowID))}
                                         locale={locale}/>}/>
            }
        </WithSpinner>
    );
};

const mapStateToProps = (state: any, ownProps: TableContainerProps) => {
    const {tableName} = ownProps.match.params;
    return {
        tableName,
        headers: selectors.getTableHeaders(state, tableName),
        locales: locales,
        rows: selectors.getTableRows(state, tableName),
        tableMeta: selectors.getTableMeta(state, tableName),
        taskStatuses: selectors.getAsyncTaskStatuses(state),
        domainPath: ownProps.domainPath,
        isLoading: selectors.isLoadingTasks(state, [GET_TABLE_HEADERS_ACTION, GET_TABLE_ROWS_ACTION])
    };
};


export default withRouter<any>(connect(mapStateToProps)(TableContainerComponent));
