import * as React from 'react';
import cn from 'classnames';
import {Header, Locale, Row, TableMeta} from '../../schema/models';
import Cell from '../cells/cell.component';
import {Link} from 'react-router-dom';
import * as styles from './table.component.styles.css';

interface TableProps {
    headers: Header[],
    rows: Row[],
    tableMeta: TableMeta,
    locale: Locale,
    domainPath: string
}

const TableComponent = (props: TableProps) => {
    const {headers, rows, tableMeta, locale, domainPath} = props;
    return (
        <div className={styles.TableManager}>
            <div className={styles.TableManager__toolbar}>
                <Link to={`${domainPath}/tables/${tableMeta.name}/rows/${locale.key}/new`} className="button">
                    Добавить запись
                </Link>
            </div>
            <table className={cn(styles.TableManager__table, styles.Table)}>
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
                                </td>);
                            })}
                            <td>
                                <Link
                                    to={`${domainPath}/tables/${tableMeta.name}/rows/${locale.key}/${row._id}`}>Edit</Link>
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
};

export default TableComponent;
