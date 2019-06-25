import * as React from 'react';
import {lazy} from 'react';
import {injectReducer} from '../../store/configStore';
import {MODULE_NAME} from './constants';

const Table = lazy(() => import( './components/table/table-container.component'));
const Row = lazy(() => import('./components/row/row-container.component'));

const Components: {[k: string]: any} = {
    Table,
    Row
};

const AsyncComponent = (props: any) => {
    import('./store/reducers')
        .then(module => {
            injectReducer(MODULE_NAME, module.default);
        });
    const { componentName } = props;
    const Component = Components[componentName];
    return <Component {...props} />;
};

export default AsyncComponent;
