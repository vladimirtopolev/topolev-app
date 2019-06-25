import * as React from 'react';
import {CellProps} from './cell.component';

const Input = ({cell, isEditMode}: CellProps) => {
    return isEditMode
        ? <input type="text" value={cell.value}/>
        : cell.value;
};

export default Input;