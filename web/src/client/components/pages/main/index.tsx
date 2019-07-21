import * as React from 'react';

import {useState, Fragment} from 'react';
import Header from '../../layout/elements/header.component';
import Footer from '../../layout/elements/footer.component';
import './index.scss';

import MainView from './elements/main-view.component';
import Advantages from './elements/advantages.component';
import AboutUs from './elements/about-us.component';
import News from './elements/news.component';
import BestWorks from './elements/best-work.component';
import MakeOrder from './elements/make-order.component';
import Partners from './elements/partners.component';

const Main = () => {
    const [scrollWrapper, changeScrollWrapper] = useState(true);
    const toggleScrollWrapper = (newState: any) => {
        changeScrollWrapper(newState === undefined ? !scrollWrapper : newState);
    };

    return (
        <Fragment>
            <Header toggleScrollWrapper={toggleScrollWrapper}/>
            <div className="wrapper" style={{overflowY: scrollWrapper ? 'visible' : 'hidden'}}>
                <div className="content">
                    <MainView/>
                    <Advantages/>
                    <AboutUs/>
                    <News/>
                    <BestWorks/>
                    <MakeOrder/>
                    <Partners/>
                </div>
                <Footer/>
            </div>
        </Fragment>
    );
};

export default Main;
