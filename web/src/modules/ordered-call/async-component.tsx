import * as React from 'react';
import {lazy, Suspense} from 'react';
import {injectReducer} from '../../store/configStore';
import {MODULE_NAME} from './constants';
import Spinner from '../../common/elements/spinner.component';

const OrderedCallsRoutes = lazy(() => import('./routes'));
const OrderedCallsDashboard = lazy(() => import( './components/ordered-calls-dashboard.container'));

const Components: { [k: string]: any } = {
    OrderedCallsRoutes,
    OrderedCallsDashboard
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
