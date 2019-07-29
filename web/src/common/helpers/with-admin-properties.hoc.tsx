import * as React from 'react';
import {getProperties} from '../../store/reducers';
import {connect} from 'react-redux';
import {Property} from '../../modules/properties/schema/models';


interface WithAdminPropertiesProps {
    properties: Property[]
}

const mapStateToProps = (state: any) => {
    return {
        properties: getProperties(state)
    };
};


export default function withAuthenticatesUser(OriginComponent: any) {
    const DecoratedComponent = (props:any) => {
        return <OriginComponent {...props}/>;
    };
    return connect(mapStateToProps, null)(DecoratedComponent);
}

