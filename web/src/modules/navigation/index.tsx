import * as React from 'react';
import {Route, Switch} from 'react-router';
import {lazy} from 'react';

import Navigation from './components/navigation-toolbar.component'

export const navigationRouterCreator = (domainPath: string) =>
    <Route path={domainPath} render={() => <Navigation domainPath={domainPath}/>}/>;
