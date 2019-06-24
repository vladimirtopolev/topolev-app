import * as React from 'react';
import {Header} from '../schema/models';

interface TableHeaders {
    headers: Header[]
}

export default ({headers}: TableHeaders) => {
    return (
        <tr>
            {headers.map(header => <td>{header.name}</td>)}
        </tr>
    );
}
