import * as React from 'react';
import AdminLayout from './admin/components/layout/admin-layout.component';
import {Switch} from 'react-router';
import {propertiesRouterCreator} from './modules/properties';
import {tableRouterCreator} from './modules/table';
import {orderedCallsRouterCreator} from './modules/ordered-call';

export default () => (
    <AdminLayout>
        {() => (
            <Switch>
                {propertiesRouterCreator('/admin/properties')}
                {orderedCallsRouterCreator('/admin/orderCalls')}
                {tableRouterCreator('/admin/tables')}
            </Switch>
        )}
    </AdminLayout>
);
