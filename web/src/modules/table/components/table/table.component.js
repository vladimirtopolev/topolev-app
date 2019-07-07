import * as React from 'react';
import cn from 'classnames';
import Cell from '../cells/cell.component';
import { Link } from 'react-router-dom';
import * as styles from './table.component.styles.css';
var TableComponent = function (props) {
    var headers = props.headers, rows = props.rows, tableMeta = props.tableMeta, locale = props.locale, domainPath = props.domainPath;
    return (React.createElement("div", { className: styles.TableManager },
        React.createElement("table", { className: cn(styles.TableManager__table, styles.Table) },
            React.createElement("thead", null,
                React.createElement("tr", null,
                    headers.map(function (header) { return React.createElement("th", { key: header._id }, header.name); }),
                    React.createElement("th", null))),
            React.createElement("tbody", null, rows.map(function (row) {
                return (React.createElement("tr", { key: row._id },
                    headers.map(function (header) {
                        var cell = row.cells.find(function (c) { return c.header._id === header._id; });
                        return (React.createElement("td", { key: header._id },
                            React.createElement(Cell, { cell: cell, locale: locale })));
                    }),
                    React.createElement("td", null,
                        React.createElement(Link, { to: domainPath + "/tables/" + tableMeta.name + "/rows/" + locale.key + "/" + row._id }, "Edit"))));
            })))));
};
export default TableComponent;
//# sourceMappingURL=table.component.js.map