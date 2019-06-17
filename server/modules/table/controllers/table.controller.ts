import {Request, Response} from 'express';
import {TableModel, Table} from '../models/table.model';
import {TableRowModel, TableRow} from '../models/tableRow.model';


const populateRowsDescription = {
    path: 'rows',
    model: 'TableRow',
    populate: {
        path: 'cells',
        model: 'TableCell',
        populate: {
            path: 'type',
            model: 'TableHeader'
        }
    }
};

const populateCellDescription = {
    path: 'cells',
    model: 'TableCell',
    populate: {
        path: 'type',
        model: 'TableHeader'
    }
};

class TableController {
    getTable(req: Request, res: Response) {
        const {tableName} = req.params;
        TableModel.findOne({name: tableName})
            .populate('headers')
            .populate(populateRowsDescription)
            .exec()
            .then(table => res.json(table))
            .catch(e => {
                res.status(500).json({error: 'Server error'});
            });
    }

    getHeaders(req: Request, res: Response) {
        const {tableName} = req.params;
        TableModel.findOne({name: tableName})
            .populate('headers')
            .exec()
            .then(table => res.json(table.headers))
            .catch(e => {
                res.status(500).json({error: 'Server error'});
            });
    }

    getRows(req: Request, res: Response) {
        const {tableName} = req.params;
        TableModel.findOne({name: tableName})
            .populate(populateRowsDescription)
            .exec()
            .then(table => res.json(table.rows))
            .catch(e => {
                res.status(500).json({error: 'Server error'});
            });
    }

    getRow(req: Request, res: Response) {
        const {tableName, rowId} = req.params;

        TableModel.findOne({name: tableName, rows: {$elemMatch: {$eq: rowId}}}, {'rows.$': 1})
            .populate(populateRowsDescription)
            .exec()
            .then(table => res.json(table.rows[0]))
            .catch(e => {
                res.status(500).json({error: 'Server error'});
            });
    }

    updateRow(req: Request, res: Response) {
        res.json({res: 'updateRow'});
    }

    deleteRow(req: Request, res: Response) {
        const {rowId, tableName} = req.params;
        TableModel.findOne({name: tableName})
            .exec()
            .then((table: Table) => {
                return TableModel.findByIdAndUpdate(
                    table._id,
                    {rows: table.rows.filter((row: TableRow) => row._id !== rowId)}
                ).exec();
            })
            .then(() => {
                return TableRowModel.findOneAndRemove(rowId)
                    .populate(populateCellDescription)
                    .exec()
                    .then(deletedRow => res.json(deletedRow));
            })
            .catch(e => {
                res.status(500).json({error: 'Server error'});
            });
    }

    createRow(req: Request, res: Response) {
        res.json({res: 'createRow'});
    }
}

export default new TableController();
