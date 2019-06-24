import * as React from 'react';
import {Header, Row} from '../schema/models';
import Cell from './cells/cell.component';
import {Link} from 'react-router-dom';

interface TableProps {
    headers: Header[],
    rows: Row[]
}

const TableComponent = ({headers, rows}: TableProps) => {
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
                            const cell = row.cells.find(c => c.type._id === header._id);
                            return (<td key={header._id}>
                                <Cell cell={cell} />
                            </td>)
                        })}
                        <td>
                            Actions
                        </td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
};

export default TableComponent;
