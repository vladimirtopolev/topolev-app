import * as React from 'react';
import * as _ from 'lodash';
import * as moment from 'moment';
import cn from 'classnames';
import Layout from '../../layout/layout.component';
import {Row} from '../../../../modules/table/schema/models';
import {useContext} from 'react';
import {LanguageContext} from '../../../../common/helpers/with-language-context.render-props-component';
import {getCellValueByInternalName} from '../../../../common/modules/adminTableData/helpers';
import {Link} from 'react-router-dom';
import * as styles from './news-rows-renderer.component.styles.css';

interface NewsProps {
    rows: Row[]
}

export default ({rows}: NewsProps) => {
    const languageContext = useContext(LanguageContext);

    const extractNewsFromRow = (news: Row) => {
        return {
            title: getCellValueByInternalName(news, 'title', languageContext.locale),
            date: getCellValueByInternalName(news, 'date'),
            img: getCellValueByInternalName(news, 'article_img')
        };
    };

    const mainNews = _.take(rows, 2);

    const restNews = _.slice(rows, 3, 7);
    const newsPerColumn = Math.floor(restNews.length / 3);
    const generateNewsColumn = (colNumber: number) => {
        const firstIndex = (colNumber - 1) * newsPerColumn;
        const lastIndex = firstIndex + newsPerColumn;
        const news = _.slice(restNews, firstIndex, lastIndex);
        return (
            <div className="col-md-4">
                {
                    news.map((news) => {
                        const {title, date, img} = extractNewsFromRow(news);
                        return (
                            <div className={styles.NewsItem}>
                                <div className={styles.NewsItem__img}>
                                    <img src={img}/>
                                </div>
                                <div className={styles.NewsItem__content}>
                                    <div className={styles.NewsItem__date}>{moment(date).format('DD/MM/YYYY')}</div>
                                    {title}
                                    <Link to={`/news/${news._id}`} className={styles.NewsItem__link}>Читать...</Link>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        );
    };

    return (
        <Layout>
            <div className={styles.News}>
                <div className={cn(styles.News__recentNews, 'row')}>
                    {mainNews.map((news) => {
                        const {title, date, img} = extractNewsFromRow(news);
                        return (
                            <div className="col-md-6" key={news._id}>
                                <Link to={`/news/${news._id}`} className={styles.RecentNewsContainer}>
                                    <div className={cn(styles.RecentNews)}>
                                        <img src={img} className={styles.RecentNews__img}/>
                                        <div className={cn(styles.RecentNews__date, styles.Date)}>
                                            <div className={styles.Date__day}>
                                                {moment(date).format('DD')}
                                            </div>
                                            <div className={styles.Date__monthYearContainer}>
                                                <div className={styles.Date__month}>
                                                    {moment(date).locale('ru').format('MMM')}
                                                </div>
                                                <div className={styles.Date__year}>
                                                    {moment(date).year()}
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.RecentNews__title}>
                                            {title}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
                <h1 className={styles.RestNews__title}>Читайте также:</h1>

                <div className="row">
                    {generateNewsColumn(1)}
                    {generateNewsColumn(2)}
                    {generateNewsColumn(3)}
                </div>
            </div>
        </Layout>
    );
}
