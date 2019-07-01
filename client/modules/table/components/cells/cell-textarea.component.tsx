import * as React from 'react';
import {CellProps} from './cell.component';
import Editor from '../../../../common/editor.component';

const TeaxtareaCell = ({cell, isEditMode, changeCell, locale}: CellProps) => {
    return isEditMode
        ? <Editor value={cell.value[locale.key]} onChange={(value => changeCell(cell._id, value))}/>
        : <div>{cell.value[locale.key]}</div>;
};

export default TeaxtareaCell;
