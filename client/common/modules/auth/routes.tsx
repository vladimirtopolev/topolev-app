import * as React from 'react';
import {Route, Switch} from 'react-router';
import AsyncComponent from './async-component';


export default () => {
    return (
        <Switch>
            <Route path="/user/signin" render={() => <AsyncComponent componentName="Signin"/>}/>;
        </Switch>
    );
}
