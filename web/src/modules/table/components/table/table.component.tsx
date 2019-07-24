import * as React from 'react';
import {useState} from 'react';
import cn from 'classnames';
import {Header, HEADER_TYPES, Locale, Row, TableMeta} from '../../schema/models';
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

    const headerFilters = (header:Header) => header.type !== HEADER_TYPES.IMAGE_GALLERY
    return (
        <div className={styles.TableManager}>
            <div className={styles.TableManager__toolbar}>
                <Link to={`${domainPath}/${tableMeta.name}/rows/${locale.key}/new`} className="button">
                    Добавить запись
                </Link>
            </div>
            <table className={cn(styles.TableManager__table, styles.Table)}>
                <thead>
                <tr>
                    {headers
                        .filter(headerFilters)
                        .map(header => <th key={header._id}>{header.name}</th>)}
                    <th className={styles.Table__actionColumn}></th>
                </tr>
                </thead>
                <tbody>
                {rows.map(row => {
                    return (
                        <tr key={row._id}>
                            {headers
                                .filter(headerFilters)
                                .map(header => {
                                    const cell = row.cells.find(c => c.header._id === header._id);
                                    return (<td key={header._id}>
                                        <Cell cell={cell} locale={locale} notLocalized={header.notLocalized}/>
                                    </td>);
                                })}
                            <td>
                                <Link
                                    className={cn('iconButton', 'iconButton_edit')}
                                    to={`${domainPath}/${tableMeta.name}/rows/${locale.key}/${row._id}`}>
                                </Link>
                                <button
                                    className={cn('iconButton', 'iconButton_warning', 'iconButton_delete')}
                                    onClick={() => {
                                        changeDeletedRowId(row._id);
                                        toggleModal(true);
                                    }}>
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
