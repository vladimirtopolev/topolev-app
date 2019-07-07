import * as React from 'react';
import {Cell, Locale} from '../../schema/models';

import InputCell from './cell-input.component';
import SingleImageCell from './cell-single-image.component';
import TextareaCell from './cell-textarea.component';

export interface CellProps {
    cell: Cell,
    isEditMode?: boolean
    changeCell?: (cellId: string, value: any, locale?: Locale) => void,
    locale: Locale
}

const Cell = (props: CellProps) => {
    const {cell} = props;
    switch (cell.header.type) {
        case 'INPUT':
            return <InputCell {...props}/>;
        case 'IMAGE':
            return <SingleImageCell {...props}/>;
        case 'TEXTAREA':
            return <TextareaCell {...props}/>;
        default:
            throw Error(`Invalid header type ${cell.header.type}`);
    }
};

export default Cell;
