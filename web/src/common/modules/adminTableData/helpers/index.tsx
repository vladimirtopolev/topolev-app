import {Row} from '../../../../modules/table/schema/models';

export const getCellValueByInternalName = (row: Row, internalName: string) => {
    const cell =  row.cells.find(cell => cell.header.internalName === internalName);
    return cell && cell.value || '';
};
