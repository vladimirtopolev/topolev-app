import {Route, Switch} from 'react-router';
import * as React from 'react';
import {lazy, useEffect} from 'react';
import {connect} from 'react-redux';

import WithLanguageContext from './common/helpers/with-language-context.render-props-component';

const MainPage = lazy(() => import('./client/components/pages/main'));
const ContactPage = lazy(() => import('./client/components/pages/contacts/contact.component'));

import {getProperties} from './common/modules/properties/store/actions/actions'

interface ClientProps {
    dispatch: any
}

const Client = ({dispatch}: ClientProps) => {
    useEffect(() => {dispatch(getProperties())}, []);
    return (
        <WithLanguageContext>
            <Switch>
                <Route path="/" exact component={MainPage}/>
                <Route path="/contact" component={ContactPage}/>
            </Switch>
        </WithLanguageContext>
    );
};


export default connect()(Client);
