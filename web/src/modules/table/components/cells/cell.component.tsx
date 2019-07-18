import * as React from 'react';
import {Cell, Locale} from '../../schema/models';

import Value from './value.component';

export interface CellProps {
    cell: Cell,
    isEditMode?: boolean
    changeCell?: (cellId: string, value: any, locale?: Locale) => void,
    locale: Locale
}

const Cell = ({changeCell, cell, ...rest}: CellProps) => {
    const changeValue = (value: any, locale?: Locale) => {
        changeCell(cell.header._id, value, locale);
    };
    const value = cell && cell.value || '';
    const type = cell.header.type;

    return <Value type={type} value={value} changeValue={changeValue} {...rest}/>;
};

export default Cell;
