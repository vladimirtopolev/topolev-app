var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { connect } from 'react-redux';
import * as React from 'react';
import { withRouter } from 'react-router-dom';
import * as selectors from '../../store/reducers/index';
import { GET_TABLE_HEADERS_ACTION } from '../../store/actions/types';
import Table from './table.component';
import LocaleTabsRenderer from '../../../../common/elements/locale-tabs-renderer.component';
import { getTableHeaders, getTableRows } from '../../store/actions/actions';
export var locales = [
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
var TableContainerComponent = /** @class */ (function (_super) {
    __extends(TableContainerComponent, _super);
    function TableContainerComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TableContainerComponent.prototype.componentDidMount = function () {
        var tableName = this.props.match.params.tableName;
        this.props.dispatch(getTableHeaders(tableName));
        this.props.dispatch(getTableRows(tableName));
    };
    TableContainerComponent.prototype.render = function () {
        var _a = this.props, tableMeta = _a.tableMeta, headers = _a.headers, rows = _a.rows, locales = _a.locales, domainPath = _a.domainPath;
        if (this.props.taskStatuses[GET_TABLE_HEADERS_ACTION] === 'SUCCEEDED') {
            return React.createElement(LocaleTabsRenderer, { locales: locales, renderLocaleTab: function (locale) { return React.createElement(Table, { domainPath: domainPath, tableMeta: tableMeta, headers: headers, rows: rows, locale: locale }); } });
        }
        return 'Loading....';
    };
    return TableContainerComponent;
}(React.Component));
var mapStateToProps = function (state, ownProps) {
    var tableName = ownProps.match.params.tableName;
    return {
        headers: selectors.getTableHeaders(state, tableName),
        locales: locales,
        rows: selectors.getTableRows(state, tableName),
        tableMeta: selectors.getTableMeta(state, tableName),
        taskStatuses: selectors.getAsyncTaskStatuses(state),
        domainPath: ownProps.domainPath
    };
};
export default withRouter(connect(mapStateToProps)(TableContainerComponent));
//# sourceMappingURL=table-container.component.js.map