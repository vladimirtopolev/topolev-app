import * as React from 'react';
import {ValueRenderProps} from './value.component';
import {ChangeEvent} from 'react';
import {getValue} from './helpers/utilities';
import {DEFAULT_LOCALE} from '../../../../config/locales'

const InputValue = ({value, isEditMode, changeValue}: ValueRenderProps) => {
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        changeValue(e.target.value);
    };

    const localizedValue = getValue(value);
    return !isEditMode
        ? localizedValue
        : <input type="date" value={localizedValue} onChange={onChange} className="input"/>
};

export default InputValue;
