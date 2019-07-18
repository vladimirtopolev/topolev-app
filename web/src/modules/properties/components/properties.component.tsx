import * as React from 'react';
import {useEffect} from 'react';
import {PropertiesContainerProps} from './properties-container.component';

export default ({properties, getProperties}: PropertiesContainerProps) => {
    useEffect(() => {
        getProperties()
    }, []);
    return (
        <div>{properties.map(property => (
            <div key={property._id}>
                <div>{property.value}</div>
            </div>
        ))}</div>
    );
}
