import * as _ from 'lodash';
import {Locale} from '../../../schema/models';
import {DEFAULT_LOCALE} from '../../../../../config/locales';

export const getValue = (value:any, locale: Locale) => {
    // @ts-ignore
    return _.isObject(value) ? value[locale.key] || value[DEFAULT_LOCALE.key] || '' : value || ''
};
