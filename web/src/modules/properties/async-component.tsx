import * as React from 'react';
import {lazy, Suspense} from 'react';
import Spinner from '../../common/elements/spinner.component';
import {MODULE_NAME} from './constants';
import {injectReducer} from '../../store/configStore';

const Properties = lazy(() => import('./components/properties-container.component'));
const Components: { [k: string]: any } = {
    Properties
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
