import * as React from 'react';
import * as _ from 'lodash';
import withAdminTableData, {WithAdminTableDataHoc} from '../../../../../common/helpers/with-admin-table-data.hoc';
import {getCellValueByInternalName} from '../../../../../common/modules/adminTableData/helpers';
import {useContext} from 'react';
import {LanguageContext} from '../../../../../common/helpers/with-language-context.render-props-component';
import {Link} from 'react-router-dom';

const Portfolio = ({adminTableData}: WithAdminTableDataHoc) => {
    const languageContext = useContext(LanguageContext);
    const {dictionary} = languageContext;

    const portfolios = _.takeRight(adminTableData, 6);
    return (
        <section className="bestworks">
            <div className="container">
                <h1 className="bestworks__title title">{dictionary['latestWork']}</h1>
                <div className="bestworks__works row">
                    {portfolios.map(portfolio => {
                        const image = getCellValueByInternalName(portfolio, 'image');
                        const title = getCellValueByInternalName(portfolio, 'title', languageContext.locale);
                        return (
                            <div className="bestworks__work col-md-4 col-sm-6">
                                <div className="work">
                                    <img className="work__img" src={image}/>
                                    <p className="work__description-container">
                                        <span className="work__description">{title}</span>
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="bestworks__linkContainer">
                    <Link to="/portfolio" className="link">{dictionary['seeAllCollection']}</Link>
                </div>
            </div>
        </section>
    );
}

export default withAdminTableData<any>('portfolio')(Portfolio);
