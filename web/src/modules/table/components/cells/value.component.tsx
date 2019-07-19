import * as React from 'react';
import InputValue from './value-input.component';
import SingleImageCell from './value-single-image.component';
import TextareaValue from './value-textarea.component';
import {Locale} from '../../schema/models';

export interface ValueRenderProps {
    value: any,
    isEditMode?: boolean,
    changeValue?: (value: any, locale?: Locale) => void,
    locale: Locale,
    notLocalized?: boolean
}
export interface ValueProps extends ValueRenderProps{
    type: string
}

export default ({type, ...rest}: ValueProps) => {
    switch (type) {
        case 'INPUT':
            return <InputValue  {...rest}/>;
        case 'IMAGE':
            return <SingleImageCell {...rest}/>;
        case 'TEXTAREA':
            return <TextareaValue {...rest}/>;
        default:
            throw Error(`Invalid header type ${type}`);
    }
}
