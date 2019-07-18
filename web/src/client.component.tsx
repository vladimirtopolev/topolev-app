import {Route, Switch} from 'react-router';
import * as React from 'react';
import {lazy} from 'react';

const MainPage = lazy(() => import('./client/App')) ;

export default () => {
    return (
        <Switch>
            <Route path="/" exact component={MainPage}/>;
        </Switch>
    );
}
