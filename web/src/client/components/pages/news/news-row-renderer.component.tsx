import * as React from 'react';
import cn from 'classnames';
import * as moment from 'moment';
import Layout from '../../layout/layout.component';
import {getCellValueByInternalName} from '../../../../common/modules/adminTableData/helpers';
import {useContext} from 'react';
import {LanguageContext} from '../../../../common/helpers/with-language-context.render-props-component';
import * as styles from './news-row-renderer.component.styles.css';

export default (props: any) => {
    const languageContext = useContext(LanguageContext);
    const title = getCellValueByInternalName(props.row, 'title', languageContext.locale);
    const date = getCellValueByInternalName(props.row, 'date');
    const text = getCellValueByInternalName(props.row, 'text', languageContext.locale);

    return (
        <Layout>
            <div className={styles.News}>
                <div className={cn(styles.News__title, styles.Title)}>
                    <div className={styles.Title__date}>
                        {moment(date).format('DD/MM/YYYY')}
                    </div>
                    <div className={styles.Title__text}>
                        {title}
                    </div>
                </div>
                <div className={styles.News__text}
                    dangerouslySetInnerHTML={{__html: text}}>
                </div>
            </div>
        </Layout>
    );
}
