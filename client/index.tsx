import * as React from "react";
import * as ReactDOM from "react-dom";
import configStore from './store/configStore';
import {BrowserRouter, Link} from 'react-router-dom';
import {Provider} from 'react-redux';
import './styles.css';

import TableModule from './modules/table';
import AdminLayout from './admin/components/layout/admin-layout.component';

const store = configStore();

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <AdminLayout/>
            {/*}
            Test
            <Link to={'/tables/test'}>Table</Link>
            <TableModule/>
            */}
        </BrowserRouter>
    </Provider>
), document.getElementById("root"));
