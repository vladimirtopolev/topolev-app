import * as React from 'react';
import {useContext} from 'react';
import * as _ from 'lodash';
import * as moment from 'moment';
import withAdminTableData, {WithAdminTableDataHoc} from '../../../../../common/helpers/with-admin-table-data.hoc';
import {getCellValueByInternalName} from '../../../../../common/modules/adminTableData/helpers';
import {
    LanguageContext
} from '../../../../../common/helpers/with-language-context.render-props-component';

const News = (props: WithAdminTableDataHoc) => {
    const {adminTableData} = props;
    const languageContext = useContext(LanguageContext);
    return (
        <section className="news">
            <div className="news__container container">
                <div className="row">
                    <div className="col-lg-4 col-md-12">
                        <div className="news__title title">Новости</div>
                    </div>
                    <div className="col-lg-8 col-md-12">
                        <div className="news__container row">
                            {
                                _.take(adminTableData, 2)
                                    .map(newsRow => {
                                        const date = getCellValueByInternalName(newsRow, 'date');
                                        const title = getCellValueByInternalName(newsRow, 'title', languageContext.locale);

                                        console.log('---> -->', date, title);
                                        return (
                                            <div className="col-md-6">
                                                <div className="new-item">
                                                    <div
                                                        className="new-item__date">{moment(date).format('DD.MM.YYYY')}</div>
                                                    <div className="new-item__title">
                                                        {title}
                                                    </div>
                                                    <div className="new-item__link">
                                                        <button className="link">Читать...</button>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default withAdminTableData<any>('news')(News);
