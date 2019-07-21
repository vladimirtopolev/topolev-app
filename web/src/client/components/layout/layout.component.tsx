import * as React from 'react';
import Header from './elements/header.component';
import Footer from './elements/footer.component';
import {Fragment} from 'react';
import {useState} from 'react';

import './layout.component.css';

interface LayoutProps {
    children: JSX.Element
}

export default ({children}: LayoutProps) => {
    const [scrollWrapper, changeScrollWrapper] = useState(true);
    const toggleScrollWrapper = (newState: any) => {
        changeScrollWrapper(newState === undefined ? !scrollWrapper : newState);
    };
    return (
        <Fragment>
            <Header toggleScrollWrapper={toggleScrollWrapper} className="header_static"/>
            <div className="wrapper" style={{overflowY: scrollWrapper ? 'visible' : 'hidden'}}>
                <div className="content">
                    <div className="secondary-content container">
                        {children}
                    </div>
                </div>
                <Footer/>
            </div>
        </Fragment>
    );
}
