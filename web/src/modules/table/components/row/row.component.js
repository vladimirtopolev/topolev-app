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
import * as React from 'react';
import { Fragment } from 'react';
import { useState, useEffect } from 'react';
import Cell from '../cells/cell.component';
var getRow = function (headers, row) {
    return row || {
        _id: undefined,
        cells: headers
            ? headers.map(function (header) { return ({
                _id: undefined,
                header: header,
                value: ''
            }); })
            : []
    };
};
var Row = function (_a) {
    var headers = _a.headers, row = _a.row, locale = _a.locale, goBack = _a.goBack;
    var _b = useState(false), isEditMode = _b[0], changeEditMode = _b[1];
    var _c = useState(getRow(headers, row)), rowInMemory = _c[0], changeRowInMemory = _c[1];
    useEffect(function () {
        changeRowInMemory(getRow(headers, row));
    }, [headers, row]);
    var changeCell = function (cellId, value, locale) {
        changeRowInMemory(__assign({}, row, { cells: rowInMemory.cells.map(function (cell) {
                var _a;
                return cell._id === cellId
                    ? __assign({}, cell, { value: locale ? __assign({}, cell.value, (_a = {}, _a[locale.key] = value, _a)) : value }) : cell;
            }) }));
    };
    var saveRow = function () {
    };
    return (React.createElement("div", null,
        headers.map(function (header) {
            console.log(header._id);
            var cell = rowInMemory && rowInMemory.cells.find(function (c) { return c.header._id === header._id; });
            return (React.createElement("div", { key: header._id },
                React.createElement("div", null, header.name),
                React.createElement("div", null, cell &&
                    React.createElement(Cell, { cell: cell, isEditMode: isEditMode, changeCell: changeCell, locale: locale }))));
        }),
        isEditMode
            ? React.createElement(Fragment, null,
                React.createElement("button", { onClick: function () { return changeEditMode(false); } }, "\u041D\u0430\u0437\u0430\u0434"),
                React.createElement("button", null, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"))
            : React.createElement(Fragment, null,
                React.createElement("button", { onClick: goBack }, "\u041D\u0430\u0437\u0430\u0434"),
                React.createElement("button", { onClick: function () { return changeEditMode(!isEditMode); } }, "Edit"))));
};
export default Row;
//# sourceMappingURL=row.component.js.map