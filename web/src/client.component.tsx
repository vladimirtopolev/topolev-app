import {Route, Switch} from 'react-router';
import * as React from 'react';
import {lazy, useEffect} from 'react';

import {LanguageContext} from './common/helpers/with-language-context.render-props-component';
import WithLanguageContext from './common/helpers/with-language-context.render-props-component';
const MainPage = lazy(() => import('./client/App')) ;


const ContactPage = lazy(() => import('./client/components/pages/contacts/contact.component'))
export default () => {
    return (
        <WithLanguageContext>
            <Switch>
                <Route path="/" exact component={MainPage}/>
                <Route path="/contact" component={ContactPage}/>
            </Switch>
        </WithLanguageContext>
    );
}
