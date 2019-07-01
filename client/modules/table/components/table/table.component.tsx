import * as React from 'react';
import {Header, Locale, Row, TableMeta} from '../../schema/models';
import Cell from '../cells/cell.component';
import {Link} from 'react-router-dom';

interface TableProps {
    headers: Header[],
    rows: Row[],
    tableMeta: TableMeta,
    locale: Locale
}

const TableComponent = ({headers, rows, tableMeta, locale}: TableProps) => {
    return (
        <table>
            <thead>
            <tr>
                {headers.map(header => <th key={header._id}>{header.name}</th>)}
                <th></th>
            </tr>
            </thead>
            <tbody>
            {rows.map(row => {
                return (
                    <tr key={row._id}>
                        {headers.map(header => {
                            const cell = row.cells.find(c => c.header._id === header._id);
                            return (<td key={header._id}>
                                <Cell cell={cell} locale={locale}/>
                            </td>)
                        })}
                        <td>
                            <Link to={`/tables/${tableMeta.name}/rows/${locale.key}/${row._id}`}>Edit</Link>
                        </td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
};

export default TableComponent;
