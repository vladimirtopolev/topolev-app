import * as React from 'react';
import {Cell} from '../../schema/models';

import InputCell from './cell-input.component';
import SingleImage from './cell-single-image.component';

export interface CellProps {
    cell: Cell,
    isEditMode?: boolean
}

const Cell = ({cell, isEditMode = false}: CellProps) => {
    switch (cell.header.type) {
        case 'INPUT':
            return <InputCell cell={cell} isEditMode={isEditMode}/>;
        case 'IMAGE':
            return <SingleImage cell={cell} isEditMode={isEditMode}/>;
        default:
            return cell.value;
    }
};

export default Cell;