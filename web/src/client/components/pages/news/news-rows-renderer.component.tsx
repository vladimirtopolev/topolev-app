import * as React from 'react';
import Layout from '../../layout/layout.component';
import {Row} from '../../../../modules/table/schema/models';
import {useContext} from 'react';
import {LanguageContext} from '../../../../common/helpers/with-language-context.render-props-component';
import {getCellValueByInternalName} from '../../../../common/modules/adminTableData/helpers';
import {Link} from 'react-router-dom';

interface NewsProps {
    rows: Row[]
}

export default ({rows}: NewsProps) => {
    const languageContext = useContext(LanguageContext);
    return (
        <Layout>
            <div>
                {
                    rows.map(newsRow => {
                        const title = getCellValueByInternalName(newsRow, 'title', languageContext.locale);
                        const date = getCellValueByInternalName(newsRow, 'date');
                        const img = getCellValueByInternalName(newsRow, 'article_img');
                        return (
                            <div key={newsRow._id}>
                                <div>{date}</div>
                                <img src={img} alt="Article Image"/>
                                <div>Title</div>
                                <Link to={`/news/${newsRow._id}`}>More...</Link>
                            </div>
                        );
                    })
                }
            </div>
        </Layout>
    );
}
