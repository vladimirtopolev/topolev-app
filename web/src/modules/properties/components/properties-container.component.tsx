import * as React from 'react';
import Properties from './properties.component';
import {connect} from 'react-redux';
import * as selectors from '../store/reducers';
import {getProperties, updateProperties} from '../store/actions/actions';
import {Property} from '../schema/models';
import LocaleTabsRenderer from '../../../common/elements/locale-tabs-renderer.component';
import {LOCALES} from '../../../config/locales';
import {useEffect} from 'react';

export interface PropertiesContainerProps {
    properties: Property[],
    getProperties: () => void
    updateProperties: (properties: any) => void
}

const mapStateToProps = (state: any) => {
    return {
        properties: selectors.getProperties(state)
    };
};
const mapDispatchToProps = (disptach: any) => {
    return {
        getProperties: () => disptach(getProperties()),
        updateProperties: (properties: any) => disptach(updateProperties(properties))
    };
};

const PropertiesComponent = ({properties, getProperties, updateProperties}: PropertiesContainerProps) => {
    useEffect(() => {
        getProperties();
    }, []);

    return <LocaleTabsRenderer
        locales={LOCALES}
        renderLocaleTab={locale =>
            <Properties properties={properties} locale={locale} updateProperties={updateProperties}/>}/>;
};


export default connect(mapStateToProps, mapDispatchToProps)(PropertiesComponent);

