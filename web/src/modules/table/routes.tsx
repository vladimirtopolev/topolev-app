import * as React from 'react';
import {Route, Switch} from 'react-router';
import AsyncComponent from './async-component';

export default ({domainPath}: { domainPath: string }) => {
    return (
        <Switch>
            <Route path={`${domainPath}/:tableName/rows/:locale/:rowId`}
                   render={() => <AsyncComponent componentName="Row"/>}/>,
            <Route path={`${domainPath}/:tableName`} render={() => <AsyncComponent componentName="Table" domainPath={domainPath}/>}/>
        </Switch>
    );
}
