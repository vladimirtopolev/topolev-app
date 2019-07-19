import * as React from 'react';
import {ValueRenderProps} from './value.component';
import {ChangeEvent} from 'react';
import {getValue} from './helpers/utilities';
import {DEFAULT_LOCALE} from '../../../../config/locales'

const InputValue = ({value, isEditMode, changeValue, locale, notLocalized}: ValueRenderProps) => {
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        changeValue(e.target.value, !notLocalized ? locale : undefined);
    };

    console.log(notLocalized, value, locale.key);
    const localizedValue = getValue(value, !notLocalized ? locale : undefined);
    return !isEditMode || (notLocalized && DEFAULT_LOCALE.key !== locale.key)
        ? localizedValue
        : <input type="text" value={localizedValue} onChange={onChange} className="input"/>
};

export default InputValue;
