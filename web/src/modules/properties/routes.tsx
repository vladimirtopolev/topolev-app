import * as React from 'react';
import {Route, Switch} from 'react-router';
import AsyncComponent from './async-component';

export default ({domainPath}: { domainPath: string }) => {
    return (
        <Switch>
            <Route path={`${domainPath}/dashboard`} render={() => <AsyncComponent componentName="Properties" domainPath={domainPath}/>}/>
        </Switch>
    );
}
