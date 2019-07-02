import * as React from 'react';
import {Route, Switch} from 'react-router';
import {lazy} from 'react';

const TableRoutes = lazy(() => import('./routes'));

export const tableRouterCreator = (domainPath: string) =>
    <Route path={domainPath} render={() => <TableRoutes domainPath={domainPath}/>}/>;
