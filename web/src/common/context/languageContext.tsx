import {Context, createContext} from 'react';
import {DEFAULT_LOCALE} from '../../config/locales';
import {Locale} from '../../modules/table/schema/models';

export const LanguageContext: Context<Locale> =  createContext<Locale>(DEFAULT_LOCALE);
