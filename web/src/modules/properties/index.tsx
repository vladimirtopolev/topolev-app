import * as React from 'react';
import {Route} from 'react-router';
import {lazy} from 'react';

const PropertiesRoutes = lazy(() => import('./routes'));

export const propertiesRouterCreator = (domainPath: string) =>
    <Route path={domainPath} render={() => <PropertiesRoutes domainPath={domainPath}/>}/>;
