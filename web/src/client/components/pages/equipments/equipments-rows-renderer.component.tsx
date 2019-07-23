import * as React from 'react';
import Layout from '../../layout/layout.component';
import {Row} from '../../../../modules/table/schema/models';

interface RowsRendererProps {
    rows: Row[]
}

export default (props: RowsRendererProps) => {
    console.log('EQ REN', props);
    return (
        <Layout>
            <div>
                TEST EQUIPMENT RENEDERER
            </div>
        </Layout>
    );
}
