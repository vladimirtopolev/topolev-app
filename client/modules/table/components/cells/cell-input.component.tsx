import * as React from 'react';
import {CellProps} from './cell.component';

const Input = ({cell}: CellProps) => {
    return cell.value;
};

export default Input;