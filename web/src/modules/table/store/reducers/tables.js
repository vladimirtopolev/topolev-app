var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as _ from 'lodash';
import { GET_TABLE_ACTION, GET_TABLE_HEADERS_ACTION, GET_TABLE_ROW_ACTION, GET_TABLE_ROWS_ACTION } from '../actions/types';
import { AsyncActionStatus } from '../../../../utilities/asyncActions';
var tables = function (state, action) {
    if (state === void 0) { state = {}; }
    if (action.type === GET_TABLE_ACTION) {
        switch (action.status) {
            case AsyncActionStatus.SUCCEEDED:
                return requestTableSuccess(state, action);
            default:
                return state;
        }
    }
    if (action.type === GET_TABLE_HEADERS_ACTION) {
        switch (action.status) {
            case AsyncActionStatus.SUCCEEDED:
                return requestTableHeadersSuccess(state, action);
            default:
                return state;
        }
    }
    if (action.type === GET_TABLE_ROWS_ACTION) {
        switch (action.status) {
            case AsyncActionStatus.SUCCEEDED:
                return requestTableRowsSuccess(state, action);
            default:
                return state;
        }
    }
    if (action.type === GET_TABLE_ROW_ACTION) {
        switch (action.status) {
            case AsyncActionStatus.SUCCEEDED:
                return requestTableRowSuccess(state, action);
            default:
                return state;
        }
    }
    return state;
};
export default tables;
var requestTableSuccess = function (state, action) {
    var _a;
    var entities = action.payload.entities;
    return __assign({}, state, (_a = {}, _a[action.params.tableName] = __assign({}, entities), _a));
};
var requestTableHeadersSuccess = function (state, action) {
    var _a;
    var entities = action.payload.entities;
    var tableName = action.params.tableName;
    return __assign({}, state, (_a = {}, _a[tableName] = __assign({}, state[tableName], entities, { headerIds: entities.table[tableName].headers }), _a));
};
var requestTableRowsSuccess = function (state, action) {
    var _a;
    var entities = action.payload.entities;
    var tableName = action.params.tableName;
    return __assign({}, state, (_a = {}, _a[tableName] = __assign({}, state[tableName], entities, { rowIds: entities.table[tableName].rows }), _a));
};
var requestTableRowSuccess = function (state, action) {
    var _a;
    var entities = action.payload.entities;
    var tableName = action.params.tableName;
    return __assign({}, state, (_a = {}, _a[tableName] = __assign({}, state[tableName], entities, { rowIds: entities.table[tableName].rows.concat(action.params.rowId) }), _a));
};
//selectors
export var getTable = function (state, tableName) { return state[tableName]; };
export var getTableMeta = function (state, tableName) {
    var tableMeta = getTable(state, tableName);
    return tableMeta
        ? tableMeta.table[tableName]
        : {
            name: tableName,
            title: ''
        };
};
export var getTableHeaders = function (state, tableName) {
    var tableMeta = getTable(state, tableName);
    return _.get(tableMeta, 'headerIds', [])
        .map(function (headerKey) { return tableMeta.headers[headerKey]; });
};
export var getTableRows = function (state, tableName) {
    var tableMeta = getTable(state, tableName);
    return _.get(tableMeta, 'rowIds', [])
        .map(function (rowKey) { return tableMeta.rows[rowKey]; })
        .map(function (row) { return (__assign({}, row, { cells: row.cells.map(function (cellKey) {
            var cell = tableMeta.cells[cellKey];
            return __assign({}, cell, { type: tableMeta.headers[cell.header] });
        }) })); });
};
export var getTableRow = function (state, tableName, rowId) {
    var tableMeta = getTable(state, tableName);
    var row = _.get(tableMeta, "rows." + rowId);
    return row
        ? __assign({}, row, { cells: row.cells.map(function (cellKey) {
                var cell = tableMeta.cells[cellKey];
                return __assign({}, cell, { type: tableMeta.headers[cell.header] });
            }) }) : undefined;
};
//# sourceMappingURL=tables.js.map