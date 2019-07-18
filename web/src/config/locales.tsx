import {Locale} from '../modules/table/schema/models';

export const LOCALES: Locale[] =  [
    {
        key: 'ru',
        name: 'RU',
        title: 'Русский'
    },
    {
        key: 'en',
        name: 'EN',
        title: 'Английский'
    }
];

export const DEFAULT_LOCALE = LOCALES[0];
