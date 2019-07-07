import * as React from 'react';
import AdminLayout from './admin/components/layout/admin-layout.component';
import { Switch } from 'react-router';
import { tableRouterCreator } from './modules/table/index';
export default (function () { return (React.createElement(AdminLayout, null, function () { return (React.createElement(Switch, null, tableRouterCreator('/admin'))); })); });
//# sourceMappingURL=admin.component.js.map