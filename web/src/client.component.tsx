import {Route, Switch} from 'react-router';
import * as React from 'react';
import {lazy} from 'react';

const MainPage = lazy(() => import('./client/App')) ;


const ContactPage = lazy(() => import('./client/components/pages/contacts/contact.component'))
export default () => {
    return (
        <Switch>
            <Route path="/" exact component={MainPage}/>
            <Route path="/contact" component={ContactPage}/>
        </Switch>
    );
}
