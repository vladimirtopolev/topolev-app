import * as React from 'react';
import {useState} from 'react';
import {Header, Row} from '../../schema/models';
import Cell from '../cells/cell.component';


interface RowProps {
    headers: Header[],
    row?: Row
}

const Row = ({headers, row}: RowProps) => {
    console.log('HEADERS', headers, row);
    const [isEditMode, changeEditMode] = useState<boolean>(false);
    return (
        <div>
            {headers.map(header => {
                const cell = row && row.cells.find(c => c.header._id === header._id);
                return (
                    <div key={header._id}>
                        <div>{header.name}</div>
                        <div>
                            {cell && <Cell cell={cell} isEditMode={isEditMode}/>}
                        </div>
                    </div>
                );
            })}
            <button onClick={() => changeEditMode(!isEditMode)}>Edit</button>
        </div>
    );
};

export default Row;