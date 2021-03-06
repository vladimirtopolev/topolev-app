import * as React from 'react';
import {Fragment} from 'react';
import {useState, useEffect} from 'react';
import {Header, Locale, Row} from '../../schema/models';
import Cell from '../cells/cell.component';
import {TableRowContainerProps} from './row-container.component';
import WithSpinner from '../../../../common/helpers/with-spinner.render-props-component';
import * as styles from './row.component.styles.css';
import {LOCALES} from '../../../../config/locales';
import * as _ from 'lodash';

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

const Row = ({tableName, rowId, headers, row, locale, goBack, getTableHeaders, getTableRow, localeItem, saveTableRow, updateTableRow, isLoading}: TableRowContainerProps) => {
    const [isEditMode, changeEditMode] = useState<boolean>(false);
    const [rowInMemory, changeRowInMemory] = useState<Row>(getRow(headers, row));

    useEffect(() => {
        getTableHeaders();
        rowId !== 'new' && getTableRow();
    }, []);

    useEffect(() => {
        changeRowInMemory(getRow(headers, row));
    }, [headers, row]);

    const changeCell = (headerId: string, value: any, locale?: Locale) => {
        changeRowInMemory({
            ...row,
            cells: rowInMemory.cells.map(cell => {
                if (cell.header._id !== headerId) {
                    return cell;
                }
                const newValue = locale
                    ? _.isObject(cell.value)
                        ? {...cell.value, [locale.key]: value}
                        : LOCALES.reduce((memo, locale) => ({...memo, [locale.key]: value}), {})
                    : value;
                return {...cell, value: newValue};
            })
        });
    };

    const saveRow = () => {
        rowId === 'new'
            ? saveTableRow(rowInMemory)
            : updateTableRow(rowInMemory);
        goBack();
    };

    return (
        <WithSpinner isLoading={isLoading}>
            {() => (
                <div className={styles.Row}>
                    {isEditMode
                        ? <button className={styles.Row__backBtn}
                                  onClick={() => changeEditMode(false)}>
                            К режиму просмотра
                        </button>
                        : <button className={styles.Row__backBtn}
                                  onClick={goBack}>
                            Назад без сохранения
                        </button>
                    }
                    <div className={styles.Row__container}>
                        {headers.map(header => {
                            const cell = rowInMemory && rowInMemory.cells.find(c => c.header._id === header._id);
                            console.log('NOT LOCALIZED ROW', header);
                            return (
                                <div key={header._id}
                                     className={styles.Cell}>
                                    <div className={styles.Cell__title}>{header.name}</div>
                                    <div className={styles.Cell__value}>
                                        {cell &&
                                        <Cell cell={cell}
                                              isEditMode={isEditMode}
                                              changeCell={changeCell}
                                              notLocalized={header.notLocalized}
                                              locale={localeItem}/>}
                                    </div>
                                </div>
                            );
                        })}
                        <div className={styles.Row__toolbar}>
                            {isEditMode
                                ? <button onClick={saveRow}
                                          className="button">
                                    Сохранить
                                </button>
                                :
                                <Fragment>
                                    <button onClick={() => changeEditMode(!isEditMode)}
                                            className="button">
                                        В режим редактирования
                                    </button>
                                    <button onClick={saveRow}
                                            className="button">
                                        Сохранить
                                    </button>
                                </Fragment>
                            }
                        </div>
                    </div>

                </div>
            )}
        </WithSpinner>
    );
};

export default Row;
