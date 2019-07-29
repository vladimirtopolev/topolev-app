import * as React from 'react';
import Header from './elements/header.component';
import Footer from './elements/footer.component';
import {Fragment} from 'react';
import {useState} from 'react';

import withAdminProperties from '../../../common/helpers/with-admin-properties.hoc';
import './layout.component.css';
import {Property} from '../../../modules/properties/schema/models';

interface LayoutProps {
    children: JSX.Element,
    properties?: Property[]
}

const Layout = ({children, properties}: LayoutProps) => {
    const [scrollWrapper, changeScrollWrapper] = useState(true);
    const toggleScrollWrapper = (newState: any) => {
        changeScrollWrapper(newState === undefined ? !scrollWrapper : newState);
    };
    return (
        <Fragment>
            <Header toggleScrollWrapper={toggleScrollWrapper} isSecondary={true} className="header_static"/>
            <div className="wrapper" style={{overflowY: scrollWrapper ? 'visible' : 'hidden'}}>
                <div className="content">
                    <div className="secondary-content container">
                        {children}
                    </div>
                </div>
                <Footer properties={properties}/>
            </div>
        </Fragment>
    );
};

export default withAdminProperties(Layout);
