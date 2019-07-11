import * as React from 'react';
import {lazy, Suspense} from 'react';
import {injectReducer} from '../../store/configStore';
import {MODULE_NAME} from './constants';
import Spinner from '../../common/elements/spinner.component';

const TableRoutes = lazy(() => import('./routes'));
const Table = lazy(() => import( './components/table/table-container.component'));
const Row = lazy(() => import('./components/row/row-container.component'));

const Components: { [k: string]: any } = {
    TableRoutes,
    Table,
    Row
};

const AsyncComponent = (props: any) => {
    import('./store/reducers')
        .then(module => {
            injectReducer(MODULE_NAME, module.default);
        });
    const {componentName} = props;
    const Component = Components[componentName];
    return (
        <Suspense fallback={<Spinner/>}>
            <Component {...props} />
        </Suspense>
    );
};

export default AsyncComponent;
