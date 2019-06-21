import * as React from 'react';
import {lazy, Suspense} from 'react';
import {Route, Switch} from 'react-router';
import AsyncComponent from './async-component';

const TableComponent = lazy(() => import('./components/table.component'));


export default () => {
    return (
        <Suspense fallback={'Loading'}>
            <Switch>
                <Route path={'/tables/:tableName'} render={() => <AsyncComponent componentName="Table"/>}/>
            </Switch>
        </Suspense>
    );
}
