import {Locale} from '../modules/table/schema/models';

export const LOCALES: Locale[] =  [
    {
        key: 'ru',
        lang: 'ru_RU',
        name: 'RU',
        title: 'Русский'
    },
    {
        key: 'en',
        lang: 'en_US',
        name: 'EN',
        title: 'Английский'
    }
];

export const DEFAULT_LOCALE = LOCALES[0];
