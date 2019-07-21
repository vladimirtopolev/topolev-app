import * as React from 'react';
import {useState, createContext} from 'react';
import {Locale} from '../../modules/table/schema/models';
import {DEFAULT_LOCALE} from '../../config/locales';


interface WithLanguageContextRenderProps {
    children: JSX.Element
}

export interface LanguageContextState {
    locale: Locale,
    changeLocale: (locale: Locale) => void
}

const InitLanguageContext: LanguageContextState = {
    locale: DEFAULT_LOCALE,
    changeLocale: (locale: Locale) => {
    }
};

export const LanguageContext = createContext<LanguageContextState>(InitLanguageContext);


export default ({children}: WithLanguageContextRenderProps) => {
    const [locale, changeLocale] = useState<Locale>(DEFAULT_LOCALE);
    console.log('LOCALE', locale);
    return (
        <LanguageContext.Provider value={{
            locale,
            changeLocale: (locale: Locale) => changeLocale(locale)
        }}>
            {children}
        </LanguageContext.Provider>
    );
}


