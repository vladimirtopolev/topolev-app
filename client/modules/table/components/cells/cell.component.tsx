import * as React from 'react';
import {Cell} from '../../schema/models';

import InputCell from './cell-input.component';
import SingleImage from './cell-single-image.component';

export interface CellProps {
    cell: Cell,
}

const Cell = ({cell}: CellProps) => {
    switch (cell.type.type) {
        case 'INPUT':
            return <InputCell cell={cell}/>;
        case 'IMAGE':
            return <SingleImage cell={cell}/>;
        default:
            return cell.value;
    }
};

export default Cell;