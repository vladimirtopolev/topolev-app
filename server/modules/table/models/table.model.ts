import * as mongoose from 'mongoose';
import {TableHeader, TableHeaderProperties} from './tableHeader.model';
import {Model, Schema} from 'mongoose';
import {TableRow, TableRowProperties} from './tableRow.model';

export interface TableProperties {
    _id: any,
    name: string,
    title: string,
    uiConfig?: any,
    adminConfig?: any
}

export interface Table extends TableProperties, mongoose.Document {
    headers: string[] | TableHeader[] | TableHeaderProperties[],
    rows: string[] | TableRow[] | TableRowProperties[],
}

export const TableSchema = new Schema({
    name: String,
    title: String,
    headers: [{
        type: Schema.Types.ObjectId, ref: 'TableHeader'
    }],
    rows: [{
        type: Schema.Types.ObjectId, ref: 'TableRow'
    }],
    uiConfig: Schema.Types.Mixed,
    adminConfig: Schema.Types.Mixed
});


export const TableModel: Model<Table> = mongoose.model('Table', TableSchema);