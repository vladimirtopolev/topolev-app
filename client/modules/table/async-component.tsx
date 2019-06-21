import * as React from 'react';
import {lazy, Suspense} from 'react';
import {injectReducer} from '../../store/configStore';


const Table = lazy(() => import( './components/table-container.component'));


const Components: {[k: string]: any} = {
    Table
};

const AsyncComponent = (props: any) => {
    import('./store/reducers')
        .then(module => {
            injectReducer('tableModule', module.default);
        });
    const { componentName } = props;
    const Component = Components[componentName];
    return <Component {...props} />;
};

export default AsyncComponent;
