import * as React from 'react';
import {Suspense} from 'react';
import {Route, Switch} from 'react-router';
import AsyncComponent from './async-component';


export default () => {
    return (
        <Suspense fallback={'Loading'}>
            <Switch>
                <Route path={'/tables/:tableName/rows/:locale/:rowId'} render={() => <AsyncComponent componentName="Row"/>}/>
                <Route path={'/tables/:tableName'} render={() => <AsyncComponent componentName="Table"/>}/>
            </Switch>
        </Suspense>
    );
}
