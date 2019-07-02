import * as React from 'react';
import AdminLayout from './admin/components/layout/admin-layout.component';
import {Switch} from 'react-router';
import {tableRouterCreator} from './modules/table';

export default () => (
    <AdminLayout>
        {() => (
            <Switch>
                {tableRouterCreator('/admin')}
            </Switch>
        )}
    </AdminLayout>
);
