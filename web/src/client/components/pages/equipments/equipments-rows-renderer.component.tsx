import * as React from 'react';
import cn from 'classnames';
import Layout from '../../layout/layout.component';
import {Row} from '../../../../modules/table/schema/models';
import {getCellValueByInternalName} from '../../../../common/modules/adminTableData/helpers';
import {useContext} from 'react';
import {LanguageContext} from '../../../../common/helpers/with-language-context.render-props-component';
import {Link, NavLink} from 'react-router-dom';
import * as styles from './equipments-rows-renderer.component.styles.css';

interface RowsRendererProps {
    rows: Row[],
    tableName: string
}

const navigation = [
    {
        url: '/equipments/buildingStands',
        title: 'buildingStands'
    },
    {
        url: '/equipments/fullingStands',
        title: 'fullingStands'
    },
    {
        url: '/equipments/design',
        title: 'designStands'
    },
    {
        url: '/equipments/electricity',
        title: 'electricityStands'
    },
    {
        url: '/equipments/presentations',
        title: 'presentationAndSeminars'
    }
];

export default ({rows, tableName}: RowsRendererProps) => {
    const languageContext = useContext(LanguageContext);
    const {dictionary} = languageContext;

    return (
        <Layout>
            <div className={styles.Equipments}>
                <div className="row">
                    <div className="col-md-3">
                        <div className={styles.Equipments__nav}>
                            <ul className={cn(styles.Navigation)}>
                                {navigation.map((nav: any) => (
                                    <li className={styles.Navigation__item}>
                                        <NavLink to={nav.url}
                                                 className={styles.Navigation__link}
                                                 activeClassName={styles.Navigation__link_active}>
                                            {dictionary[nav.title]}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            {rows.map((itemRow: Row) => {
                                const title = getCellValueByInternalName(itemRow, 'title', languageContext.locale);
                                const image = getCellValueByInternalName(itemRow, 'image');

                                return (
                                    <div className="col-lg-4 col-md-6">
                                        <div className={styles.Equipment}>
                                            <img src={image} className={styles.Equipment__img}/>
                                            <Link to={`/equipments/${tableName}/${itemRow._id}`}
                                                  className={styles.Equipment__link}>{title}</Link>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
