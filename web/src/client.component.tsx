import {Route, Switch} from 'react-router';
import * as React from 'react';
import {lazy, useEffect} from 'react';
import {connect} from 'react-redux';

import WithLanguageContext from './common/helpers/with-language-context.render-props-component';

const MainPage = lazy(() => import('./client/components/pages/main'));
const ContactPage = lazy(() => import('./client/components/pages/contacts/contact.component'));

const NewsRowsRenderer = lazy(() => import('./client/components/pages/news/news-rows-renderer.component'));
const NewsRowRenderer = lazy(() => import('./client/components/pages/news/news-row-renderer.component'));

const EquipmentRowsRenderer = lazy(() => import('./client/components/pages/equipments/equipments-rows-renderer.component'));
const EquipmentRowRenderer = lazy(() => import('./client/components/pages/equipments/equipments-row-renderer.component'));

const Portfolio = lazy(() => import('./client/components/pages/portfolio/portfolio.component'));

import {adminTableEntityCreator} from './common/modules/adminTableData';

import {getProperties} from './common/modules/properties/store/actions/actions';

interface ClientProps {
    dispatch: any
}

const Client = (props: ClientProps) => {
    useEffect(() => {
        props.dispatch(getProperties());
    }, []);
    return (
        <WithLanguageContext>
            <Switch>
                <Route path="/" exact component={MainPage}/>
                <Route path="/contact" component={ContactPage}/>
                <Route path="/portfolio" component={Portfolio}/>
                {adminTableEntityCreator('/news', 'news', NewsRowsRenderer, NewsRowRenderer)}
                {adminTableEntityCreator('/equipments/buildingStands', 'buildingStands', EquipmentRowsRenderer, EquipmentRowRenderer)}
                {adminTableEntityCreator('/equipments/fullingStands', 'fullingStands', EquipmentRowsRenderer, EquipmentRowRenderer)}
                {adminTableEntityCreator('/equipments/design', 'design', EquipmentRowsRenderer, EquipmentRowRenderer)}
                {adminTableEntityCreator('/equipments/electricity', 'electricity', EquipmentRowsRenderer, EquipmentRowRenderer)}
                {adminTableEntityCreator('/equipments/presentations', 'presentations', EquipmentRowsRenderer, EquipmentRowRenderer)}
            </Switch>
        </WithLanguageContext>
    );
};


export default connect()(Client);
