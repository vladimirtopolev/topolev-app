import {Route, Switch} from 'react-router';
import * as React from 'react';
import {lazy, useEffect} from 'react';

import {LanguageContext} from './common/context/languageContext';

const MainPage = lazy(() => import('./client/App')) ;


const ContactPage = lazy(() => import('./client/components/pages/contacts/contact.component'))
export default () => {
    return (
        <LanguageContext.Provider value={undefined}>
        <Switch>
            <Route path="/" exact component={MainPage}/>
            <Route path="/contact" component={ContactPage}/>
        </Switch>
        </LanguageContext.Provider>
    );
}
