import * as React from 'react';
import {lazy} from 'react';
import {Suspense} from 'react';
import Spinner from '../../../common/elements/spinner.component';

const Signin = lazy(() => import( './components/signin-container.component'));


const Components: { [k: string]: any } = {
    Signin
};

const AsyncComponent = (props: any) => {
    const {componentName} = props;
    const Component = Components[componentName];
    return (
        <Suspense fallback={<Spinner/>}>
            <Component {...props} />
        </Suspense>
    );
};

export default AsyncComponent;
