import * as React from "react";
import * as ReactDOM from "react-dom";
import configStore from './store/configStore';
import {BrowserRouter, Link} from 'react-router-dom';
import {Provider} from 'react-redux';

import Editor from './common/Editor';

import TableModule from './modules/table';

const store = configStore();

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            Test
            <Editor value="Test" onChange={(value) => console.log(value)}/>
            <Link to={'/tables/test'}>Table</Link>
            <TableModule/>
        </BrowserRouter>
    </Provider>
), document.getElementById("root"));
