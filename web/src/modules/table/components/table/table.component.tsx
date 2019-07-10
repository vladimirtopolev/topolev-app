import * as React from 'react';
import {useState} from 'react';
import cn from 'classnames';
import {Header, Locale, Row, TableMeta} from '../../schema/models';
import Cell from '../cells/cell.component';
import {Link} from 'react-router-dom';
import * as styles from './table.component.styles.css';
import DeleteRowModal from './delete-row-modal.component';

interface TableProps {
    headers: Header[],
    rows: Row[],
    tableMeta: TableMeta,
    locale: Locale,
    domainPath: string,
    deleteRow: (rowId: string) => void
}

const TableComponent = (props: TableProps) => {
    const {headers, rows, tableMeta, locale, domainPath, deleteRow} = props;
    const [isOpen, toggleModal] = useState<boolean>(false);
    const [deletedRowId, changeDeletedRowId] = useState<string>(null);

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
                                    className="iconButton"
                                    to={`${domainPath}/tables/${tableMeta.name}/rows/${locale.key}/${row._id}`}>Edit</Link>
                                <button
                                    className="iconButton"
                                    onClick={() => {
                                        changeDeletedRowId(row._id);
                                        toggleModal(true);
                                    }}>Delete
                                </button>
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
            <DeleteRowModal isOpen={isOpen}
                            toggleModal={() => toggleModal(!isOpen)}
                            deleteRow={() => {
                                deleteRow(deletedRowId);
                                toggleModal(false);
                            }}/>
        </div>
    );
};

export default TableComponent;
