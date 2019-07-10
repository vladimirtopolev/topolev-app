import * as React from 'react';
import {CellProps} from './cell.component';
import {ChangeEvent, SyntheticEvent} from 'react';

const Input = ({cell, isEditMode, changeCell, locale}: CellProps) => {
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('CELL', cell);
        changeCell(cell._id, e.target.value, locale)
    };
    const value = cell && cell.value && cell.value[locale.key] || '';
    return isEditMode
        ? <input type="text" value={value} onChange={onChange} className="input"/>
        : value;
};

export default Input;
