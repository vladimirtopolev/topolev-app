import * as React from 'react';
import {lazy, Suspense} from 'react';
import {Route, Switch} from 'react-router';

const TableComponent = lazy(() => import('./components/table.component'));


import('./store/reducers')
    .then((a) => {
        console.log(a);
    })

export default () => {
    return (
        <Suspense fallback={'Loading'}>
            <Switch>
                <Route path={'/tables'} component={TableComponent}/>
            </Switch>
        </Suspense>
    );
}