import { schema } from 'normalizr';
export var header = new schema.Entity('headers', {}, { idAttribute: '_id' });
export var headers = new schema.Array(header);
export var tableHeaders = new schema.Entity('table', {
    headers: headers
}, { idAttribute: 'name' });
export var cell = new schema.Entity('cells', { type: header }, { idAttribute: '_id' });
export var cells = new schema.Array(cell);
export var row = new schema.Entity('rows', { cells: cells }, { idAttribute: '_id' });
export var rows = new schema.Array(row);
export var tableRows = new schema.Entity('table', {
    rows: rows
}, { idAttribute: 'name' });
export var table = new schema.Entity('table', {
    rows: rows,
    cells: cells,
    headers: headers
}, { idAttribute: 'name' });
//# sourceMappingURL=table.js.map