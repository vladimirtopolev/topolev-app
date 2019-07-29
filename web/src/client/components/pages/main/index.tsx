import * as React from 'react';

import {useState, Fragment} from 'react';
import Header from '../../layout/elements/header.component';
import Footer from '../../layout/elements/footer.component';
import './index.scss';
import withAdminProperties from '../../../../common/helpers/with-admin-properties.hoc';

import MainView from './elements/main-view.component';
import Advantages from './elements/advantages.component';
import AboutUs from './elements/about-us.component';
import News from './elements/news.component';
import BestWorks from './elements/best-work.component';
import MakeOrder from './elements/make-order.component';
import Partners from './elements/partners.component';

const Main = (props:any) => {
    console.log('ATTENT', props);
    const [scrollWrapper, changeScrollWrapper] = useState(true);
    const toggleScrollWrapper = (newState: any) => {
        changeScrollWrapper(newState === undefined ? !scrollWrapper : newState);
    };

    return (
        <Fragment>
            <Header toggleScrollWrapper={toggleScrollWrapper} properties={props.properties}/>
            <div className="wrapper" style={{overflowY: scrollWrapper ? 'visible' : 'hidden'}}>
                <div className="content">
                    <MainView/>
                    <Advantages/>
                    <AboutUs/>
                    <News/>
                    <BestWorks/>
                    <MakeOrder/>
                    <Partners properties={props.properties}/>
                </div>
                <Footer/>
            </div>
        </Fragment>
    );
};

export default withAdminProperties(Main);
