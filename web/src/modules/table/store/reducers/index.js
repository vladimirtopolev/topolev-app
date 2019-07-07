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
import tables, * as fromTables from './tables';
import { combineReducers } from 'redux';
import { GET_TABLE_ACTION, GET_TABLE_HEADERS_ACTION, GET_TABLE_ROWS_ACTION } from '../actions/types';
import { MODULE_NAME } from '../../constants';
var asyncStatuses = function (state, action) {
    var _a;
    if (state === void 0) { state = {}; }
    if (action.type === GET_TABLE_ACTION
        || action.type === GET_TABLE_HEADERS_ACTION
        || action.type === GET_TABLE_ROWS_ACTION) {
        return __assign({}, state, (_a = {}, _a[action.type] = action.status, _a));
    }
    return state;
};
var rootReducer = combineReducers({
    tables: tables,
    asyncStatuses: asyncStatuses
});
export default rootReducer;
// selectors
export var getTable = function (state, tableName) { return fromTables.getTable(state[MODULE_NAME].tables, tableName); };
export var getTableMeta = function (state, tableName) { return fromTables.getTableMeta(state[MODULE_NAME].tables, tableName); };
export var getTableHeaders = function (state, tableName) { return fromTables.getTableHeaders(state[MODULE_NAME].tables, tableName); };
export var getTableRows = function (state, tableName) { return fromTables.getTableRows(state[MODULE_NAME].tables, tableName); };
export var getTableRow = function (state, tableName, rowId) { return fromTables.getTableRow(state[MODULE_NAME].tables, tableName, rowId); };
export var getAsyncTaskStatuses = function (state) { return state[MODULE_NAME].asyncStatuses; };
//# sourceMappingURL=index.js.map