import * as React from 'react';
import {Fragment} from 'react';
import {useState, useEffect} from 'react';
import {Header, Locale, Row} from '../../schema/models';
import Cell from '../cells/cell.component';


interface RowProps {
    headers: Header[],
    row?: Row,
    saveRow: () => void,
    locale: Locale,
    goBack: () => void
}

const getRow = (headers: Header[], row: Row): Row => {
    return row || {
        _id: undefined,
        cells: headers
            ? headers.map(header => ({
                _id: undefined,
                header,
                value: ''
            }))
            : []
    };
};

const Row = ({headers, row, locale, goBack}: RowProps) => {
    const [isEditMode, changeEditMode] = useState<boolean>(false);
    const [rowInMemory, changeRowInMemory] = useState<Row>(getRow(headers, row));

    useEffect(() => {
        changeRowInMemory(getRow(headers, row));
    }, [headers, row]);

    const changeCell = (cellId: string, value: any, locale?: Locale) => {
        console.log('CHANGE CELL VAL', value);
        changeRowInMemory({
            ...row,
            cells: rowInMemory.cells.map(cell => cell._id === cellId
                ? {
                    ...cell,
                    value: locale ? {...cell.value, [locale.key]: value} : value
                }
                : cell
            )
        });
    };

    const saveRow = () => {

    };

    return (
        <div>
            {headers.map(header => {
                console.log(header._id);
                const cell = rowInMemory && rowInMemory.cells.find(c => c.header._id === header._id);
                return (
                    <div key={header._id}>
                        <div>{header.name}</div>
                        <div>
                            {cell &&
                            <Cell cell={cell} isEditMode={isEditMode} changeCell={changeCell} locale={locale}/>}
                        </div>
                    </div>
                );
            })}
            {isEditMode
                ? <Fragment>
                    <button onClick={() => changeEditMode(false)}>Назад</button>
                    <button>Сохранить</button>
                </Fragment>
                : <Fragment>
                    <button onClick={goBack}>Назад</button>
                    <button onClick={() => changeEditMode(!isEditMode)}>Edit</button>
                </Fragment>
            }

        </div>
    );
};

export default Row;
