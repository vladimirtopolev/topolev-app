import * as React from 'react';
import Layout from '../../layout/layout.component';
import {getCellValueByInternalName} from '../../../../common/modules/adminTableData/helpers';
import {useContext} from 'react';
import {LanguageContext} from '../../../../common/helpers/with-language-context.render-props-component';

export default (props: any) => {
    const languageContext = useContext(LanguageContext);
    const title = getCellValueByInternalName(props.row, 'title', languageContext.locale);
    const date = getCellValueByInternalName(props.row, 'date');
    const articleImg = getCellValueByInternalName(props.row, 'article_img');
    const text = getCellValueByInternalName(props.row, 'article_img', languageContext.locale);

    return (
        <Layout>
            <div>
                <div>
                    {date}
                </div>
                <div>
                    {title}
                </div>
                <img src={articleImg} alt="articleImage"/>
                <div>
                    {text}
                </div>
            </div>
        </Layout>
    );
}
