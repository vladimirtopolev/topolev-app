import * as React from 'react';
import {CellProps} from './cell.component';

const SingleImage = ({cell}: CellProps) => {
    return <img src={cell.value}/>;
};

export default SingleImage;