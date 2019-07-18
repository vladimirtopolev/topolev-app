import * as React from 'react';
import {ValueRenderProps} from './value.component';
import {ChangeEvent} from 'react';
import {getValue} from './helpers/utilities';

const InputValue = ({value, isEditMode, changeValue, locale}: ValueRenderProps) => {
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        changeValue(e.target.value, locale);
    };

    const localizedValue = getValue(value, locale);
    return isEditMode
        ? <input type="text" value={localizedValue} onChange={onChange} className="input"/>
        : localizedValue;
};

export default InputValue;
