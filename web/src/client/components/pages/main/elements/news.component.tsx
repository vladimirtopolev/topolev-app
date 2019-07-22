import * as React from 'react';
import * as _ from 'lodash';
import withAdminTableData, {WithAdminTableDataHoc} from '../../../../../common/helpers/with-admin-table-data.hoc';
import {getCellValueByInternalName} from '../../../../../common/modules/adminTableData/helpers';

const News = (props: WithAdminTableDataHoc) => {
    const {adminTableData} = props;
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
                                    .map(newRow => {
                                        return (
                                            <div className="col-md-6">
                                                <div className="new-item">
                                                    <div className="new-item__date">02.2019</div>
                                                    <div className="new-item__title">
                                                        Открыта регистрация на конгресс "Эффективное тепло- и
                                                        водоснабжение
                                                        в Республике Беларусь", Минск, 19-20 марта
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
}

export default withAdminTableData<any>('news')(News);
