import * as React from 'react';
import AdminLayout from './admin/components/layout/admin-layout.component';
import {Switch} from 'react-router';
import {tableRouterCreator} from './modules/table';
import {orderedCallsRouterCreator} from './modules/ordered-call';

export default () => (
    <AdminLayout>
        {() => (
            <Switch>
                {orderedCallsRouterCreator('/admin/orderCalls')}
                {tableRouterCreator('/admin/tables')}
            </Switch>
        )}
    </AdminLayout>
);
