import * as React from 'react';
import Properties from './properties.component';
import {connect} from 'react-redux';
import * as selectors from '../store/reducers';
import {getProperties} from '../store/actions/actions';
import {Property} from '../schema/models';

export interface PropertiesContainerProps {
    properties: Property[],
    getProperties: () => void
}

const mapStateToProps = (state:any) => {
    return {
        properties: selectors.getProperties(state)
    };
};
const mapDispatchToProps = (disptach: any) => {
    return {
        getProperties: () => disptach(getProperties())
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Properties);

