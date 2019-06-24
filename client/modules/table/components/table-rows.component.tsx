import * as React from 'react';
import {Row, Header} from '../schema/models';

interface TableRows {
    headers: Header[],
    rows: Row[]
}

export default ({rows}: TableRows) => {
    return (
        <tr>
        </tr>
    );
}
