import * as mongoose from 'mongoose';
import {Request, Response} from 'express';
import {TableModel, Table} from '../models/table.model';
import {TableRowModel, TableRow} from '../models/tableRow.model';
import {TableCellModel, TableCellProperties} from '../models/tableCell.model';


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

    findTableByName(tableName: string) {
        return TableModel.findOne({name: tableName}).exec();
    }

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

    updateRow = async (req: Request, res: Response) => {
        const {tableName, rowId} = req.params;
        const table = await this.findTableByName(tableName);
        if (!table) {
            return res.status(404).json({error: `Table "${tableName}" does not exist`});
        }

        res.json({res: 'updateRow'});
    };

    deleteRow = async (req: Request, res: Response) => {
        const {rowId, tableName} = req.params;
        const table = await this.findTableByName(tableName);
        if (!table) {
            return res.status(404).json({error: `Table "${tableName}" does not exist`});
        }

        await TableModel.findByIdAndUpdate(table._id, {
            rows: table.rows.filter((row: TableRow) => row._id !== rowId)
        });

        const deletedRow = await TableRowModel.findOneAndRemove(rowId)
            .populate(populateCellDescription)
            .exec();
        res.json(deletedRow);
    };

    createRow = async (req: Request, res: Response) => {
        const {tableName} = req.params;
        const table = await this.findTableByName(tableName);
        if (!table) {
            return res.status(404).json({error: `Table "${tableName}" does not exist`});
        }

        if (!req.body.cells) {
            return res.status(400).json({error: 'Request bode should content "cells" property'});
        }

        const cells = req.body.cells.map((cell: any) => {
            return {
                ...cell,
                type: mongoose.Types.ObjectId(cell.type),
            }
        });

        const savedCells = await TableCellModel.create(cells);

        const tableRow = new TableRowModel({cells: savedCells});
        const savedTableRow = await tableRow.save();

        await TableModel.findByIdAndUpdate(table._id, {
            rows: table.rows.concat(savedTableRow._id)
        });

        res.json(savedTableRow);
    }
}

export default new TableController();
