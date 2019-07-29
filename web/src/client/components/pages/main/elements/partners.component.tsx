import * as React from 'react';
import * as _ from 'lodash';
import withAdminTableData, {WithAdminTableDataHoc} from '../../../../../common/helpers/with-admin-table-data.hoc';
import {getCellValueByInternalName} from '../../../../../common/modules/adminTableData/helpers';

export const Partners = (props: WithAdminTableDataHoc) => {
    const {adminTableData} = props;
    return (
        <section className="partners">
            <div className="container">
                <h1 className="partners__title title">Партнеры</h1>
                <div className="partners__container row">
                    {
                        _.take(adminTableData, 3)
                            .map(partnerRow => {
                                const url = getCellValueByInternalName(partnerRow, 'url');
                                const img = getCellValueByInternalName(partnerRow, 'logo');
                                return (
                                    <div className="partner col-md-4" key={partnerRow._id}>
                                        <a href={url} className="partner__link" target="_blank">
                                            <img src={img} className="partner__img"/>
                                        </a>
                                    </div>
                                );
                            })
                    }
                </div>
            </div>
        </section>
    );
}

export default withAdminTableData<any>('partners')(Partners);
