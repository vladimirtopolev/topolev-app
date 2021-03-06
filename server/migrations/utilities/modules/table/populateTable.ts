import * as async from 'async';
import {
    TableHeaderModel,
    TableHeader,
    TableHeaderProperties
} from '../../../../src/modules/table/models/tableHeader.model';
import {TableRowModel, TableRow, TableRowProperties} from '../../../../src/modules/table/models/tableRow.model';
import {saveItem, saveItems} from '../../db';
import {TableCell, TableCellModel} from '../../../../src/modules/table/models/tableCell.model';
import {TableModel, TableProperties} from '../../../../src/modules/table/models/table.model';

export interface TableInfo {
    TABLE: TableProperties,
    HEADERS: TableHeaderProperties[],
    ROWS: TableRowProperties[]
}

export const populateTable = ({HEADERS, ROWS, TABLE}: TableInfo, endCallback?: (e: any, res: any) => void) => {
    const CELLS: TableCell[] = ROWS.reduce((cells, row) => {
        return cells.concat((<TableCell[]>row.cells))
    }, <TableCell[]>[]);

    return new Promise((resolve, reject) => {
        async.series([
                cb => saveItems(TableHeaderModel, HEADERS, cb),
                cb => saveItems(TableCellModel, CELLS, cb),
                cb => saveItems(TableRowModel, ROWS, cb),
                cb => saveItem(TableModel, {
                    ...TABLE,
                    headers: HEADERS.map(header => header._id),
                    rows: ROWS.map(row => row._id)
                }, cb)
            ],
            (err, res) => {
                endCallback && endCallback(err, res);
                err ? reject(err) : resolve(res);
            })
    })
};
