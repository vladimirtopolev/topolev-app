import * as mongoose from 'mongoose';
import {TableCell, TableCellProperties} from './tableCell.model';

const {Schema} = mongoose;

export interface TableRowProperties {
    _id: any,
    cells: string[] | TableCell[] | TableCellProperties[]
}

export interface TableRow extends TableRowProperties, mongoose.Document {

}

export const TableRowSchema = new mongoose.Schema({
    cells: [{
        type: Schema.Types.ObjectId, ref: 'TableCell'
    }]
});


export const TableRowModel = mongoose.model<TableRow>('TableRow', TableRowSchema);