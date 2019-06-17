import {Request, Response} from 'express';
import {TableModel} from '../models/table.model';

class TableController {
    getTable(req: Request, res: Response) {
        const { tableName } = req.params;
        TableModel.findOne({name: tableName})
            .exec()
            .then(table => res.json(table))
            .catch(e => {
                console.log(e);
                res.status(500).json({error: 'Server error'})
            });
    }

    getHeaders(req: Request, res: Response) {
        const { tableName } = req.params;
        TableModel.findOne({ name: tableName })
            .populate('headers')
            .exec((err, item) => {
                if (!item) {
                    return res.status(404).json({ error: `Table ${tableName} does not exist` })
                }
                return res.json(item.headers);
            });
    }

    getRows(req: Request, res: Response) {
        res.json({res: 'getRows'});
    }

    getRow(req: Request, res: Response) {
        res.json({res: 'getRow'});
    }

    updateRow(req: Request, res: Response) {
        res.json({res: 'updateRow'});
    }

    deleteRow(req: Request, res: Response) {
        res.json({res: 'updateRow'});
    }
}

export default new TableController();