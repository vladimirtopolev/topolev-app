import * as React from 'react';
import {useState, createContext} from 'react';
import {Locale} from '../../modules/table/schema/models';
import {DEFAULT_LOCALE} from '../../config/locales';

export const LanguageContext = createContext<Locale>(DEFAULT_LOCALE);

interface WithLanguageContextRenderProps {
    children: JSX.Element
}

export const useLocaleState = () => useState<Locale>(DEFAULT_LOCALE);

export default ({children}: WithLanguageContextRenderProps) => {
    const [locale] = useLocaleState();
    console.log('HOC', locale);
    return (
        <LanguageContext.Provider value={locale}>
            {children}
        </LanguageContext.Provider>
    );
}


