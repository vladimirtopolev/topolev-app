import * as React from 'react';
import {useState, createContext} from 'react';
import {Locale} from '../../modules/table/schema/models';
import {DEFAULT_LOCALE} from '../../config/locales';
import LocalizedStringsFactory, {LocalizedStrings} from 'react-localization';
import {dictionary} from '../../dictonary';

interface WithLanguageContextRenderProps {
    children: JSX.Element
}

export interface LanguageContextState {
    locale: Locale,
    changeLocale: (locale: Locale) => void,
    dictionary: LocalizedStrings<any>;
}

const InitLanguageContext: LanguageContextState = {
    locale: DEFAULT_LOCALE,
    changeLocale: (locale: Locale) => {
    },
    dictionary: new LocalizedStringsFactory(dictionary)
};

console.log('JMKSHJKDHASKJHDJKSAHDJKSHJKD', dictionary, InitLanguageContext.dictionary.stands);


export const LanguageContext = createContext<LanguageContextState>(InitLanguageContext);


export default ({children}: WithLanguageContextRenderProps) => {
    const [locale, changeLocale] = useState<Locale>(DEFAULT_LOCALE);
    return (
        <LanguageContext.Provider value={{
            locale,
            changeLocale: (locale: Locale) => {
                InitLanguageContext.dictionary.setLanguage(locale.key);
                changeLocale(locale);
            },
            dictionary: InitLanguageContext.dictionary
        }}>
            {children}
        </LanguageContext.Provider>
    );
}


