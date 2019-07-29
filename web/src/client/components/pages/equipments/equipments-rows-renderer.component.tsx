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
    rows: Row[]
}


export default ({rows}: RowsRendererProps) => {
    const languageContext = useContext(LanguageContext);

    return (
        <Layout>
            <div className={styles.Equipments}>
                <div className={styles.Equipments__nav}>
                    <ul className={cn(styles.Navigation)}>
                        <li className={styles.Navigation__item}>
                            <NavLink to="/equipments/buildingStands"
                                     className={styles.Navigation__link}
                                     activeClassName={styles.Navigation__link_active}>
                                Строительство стендов
                            </NavLink>
                        </li>
                        <li className={styles.Navigation__item}>
                            <NavLink to="/equipments/fullingStands"
                                     className={styles.Navigation__link}
                                     activeClassName={styles.Navigation__link_active}>
                                Наполнение стендов
                            </NavLink>
                        </li>
                        <li className={styles.Navigation__item}>
                            <NavLink to="/equipments/buildingStands"
                                     className={styles.Navigation__link}
                                     activeClassName={styles.Navigation__link_active}>
                                Оформление стендов
                            </NavLink>
                        </li>
                        <li className={styles.Navigation__item}>
                            <NavLink to="/equipments/buildingStands"
                                     className={styles.Navigation__link}
                                     activeClassName={styles.Navigation__link_active}>
                                Энергосбережение и освещение
                            </NavLink>
                        </li>
                    </ul>
                </div>
                {rows.map((itemRow) => {
                    const title = getCellValueByInternalName(itemRow, 'title', languageContext.locale);
                    const image = getCellValueByInternalName(itemRow, 'image');

                    return (
                        <div>
                            <img src={image}/>
                            {title}
                        </div>
                    );
                })}
            </div>
        </Layout>
    );
}
