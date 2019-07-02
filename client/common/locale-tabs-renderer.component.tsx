import * as React from 'react';
import {ReactElement, useState, Fragment} from 'react';
import {Locale} from '../modules/table/schema/models';
import {Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap';
import * as styles from './locale-tabs-renderer.component.styles.css';
import cn from 'classnames';

interface LocaleTabsRendereeProps {
    locales: Locale[],
    renderLocaleTab: (locale: Locale) => ReactElement
}

export default ({locales, renderLocaleTab}: LocaleTabsRendereeProps) => {
    if (locales.length === 1) {
        return renderLocaleTab(locales[0]);
    }
    const [activeLocaleTab, changeLocaleTab] = useState<string>(locales[0].key);

    return (
        <div className={styles.LocaleTabsRenderer}>
            <Nav tabs className={styles.Nav}>
                {locales.map(locale => (
                    <NavItem key={locale.key} className={styles.Nav__item}>
                        <NavLink
                            onClick={() => changeLocaleTab(locale.key)}
                            className={cn(styles.Nav__link, {
                                [styles.Nav__link_active]: activeLocaleTab === locale.key
                            })}
                        >{locale.title}</NavLink>
                    </NavItem>
                ))}
            </Nav>
            <TabContent activeTab={activeLocaleTab} className={styles.Tabs}>
                {locales.map(locale => (
                    <TabPane tabId={locale.key} key={locale.key} className={cn(styles.Tabs__tab, {
                        [styles.Tabs__tab_active]:  activeLocaleTab === locale.key
                    })}>
                        {renderLocaleTab(locale)}
                    </TabPane>
                ))}
            </TabContent>
        </div>
    );
}
