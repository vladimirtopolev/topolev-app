import * as React from 'react';
import {useState} from 'react';
import cn from 'classnames';
import {Header, HEADER_TYPES, Locale, Row, TableMeta} from '../../schema/models';
import Cell from '../cells/cell.component';
import {Link} from 'react-router-dom';
import * as styles from './table.component.styles.css';
import DeleteRowModal from './delete-row-modal.component';

import TableRendererAsTable from './table-renderer-as-table.component';
import TableRendererAsList from './table-renderer-as-list.component';

export interface TableProps {
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
    const [view, changeView] = useState<string>('table');

    const headerFilters = (header: Header) => header.type !== HEADER_TYPES.IMAGE_GALLERY;

    const TableRenderer = view === 'table' ? TableRendererAsTable : TableRendererAsList;
    return (
        <div className={styles.TableManager}>
            <div className={styles.TableManager__toolbar}>
                <Link to={`${domainPath}/${tableMeta.name}/rows/${locale.key}/new`} className="button">
                    Добавить запись
                </Link>
                <div className={styles.buttonGroup}>
                    <button className={cn('button', styles.button, {[styles.button_active]: view === 'table'})}
                            onClick={() => changeView('table')}>
                        <i className="fas fa-table"></i>
                    </button>
                    <button className={cn('button', styles.button, {[styles.button_active]: view === 'list'})}
                            onClick={() => changeView('list')}>
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
            </div>
            <div className={styles.TableManager__table}>
                <TableRenderer
                    headerFilters={headerFilters}
                    toggleModal={toggleModal}
                    changeDeletedRowId={changeDeletedRowId}
                    {...props}
                />
            </div>
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
