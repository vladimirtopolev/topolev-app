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
import * as React from 'react';
import * as selectors from '../../store/reducers/index';
import { withRouter } from 'react-router';
import { getTableHeaders, getTableRow } from '../../store/actions/actions';
import { connect } from 'react-redux';
import TableRow from './row.component';
import { locales } from '../table/table-container.component';
var mapStateToProps = function (state, ownProps) {
    var _a = ownProps.match.params, tableName = _a.tableName, rowId = _a.rowId, locale = _a.locale;
    return {
        headers: selectors.getTableHeaders(state, tableName),
        row: selectors.getTableRow(state, tableName, rowId),
        taskStatuses: selectors.getAsyncTaskStatuses(state),
        locale: locales.find(function (l) { return l.key === locale; }),
        goBack: function () { return ownProps.history.push("/tables/" + tableName); }
    };
};
var TableRowContainerComponent = /** @class */ (function (_super) {
    __extends(TableRowContainerComponent, _super);
    function TableRowContainerComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TableRowContainerComponent.prototype.componentDidMount = function () {
        var _a = this.props.match.params, tableName = _a.tableName, rowId = _a.rowId;
        this.props.dispatch(getTableHeaders(tableName));
        if (rowId !== 'new') {
            this.props.dispatch(getTableRow(tableName, rowId));
        }
    };
    TableRowContainerComponent.prototype.render = function () {
        var _a = this.props, headers = _a.headers, row = _a.row, locale = _a.locale, goBack = _a.goBack;
        return React.createElement(TableRow, { headers: headers, row: row, saveRow: function () { }, locale: locale, goBack: goBack });
    };
    return TableRowContainerComponent;
}(React.Component));
export default withRouter(connect(mapStateToProps)(TableRowContainerComponent));
//# sourceMappingURL=row-container.component.js.map