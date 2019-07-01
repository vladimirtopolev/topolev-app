import * as React from 'react';
import {ReactElement, useState, Fragment} from 'react';
import {Locale} from '../modules/table/schema/models';
import {Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap';
// @ts-ignore
import * as styles from './locale-tabs-renderer.component.styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

interface LocaleTabsRendereeProps {
    locales: Locale[],
    renderLocaleTab: (locale: Locale) => ReactElement
}

export default ({locales, renderLocaleTab}: LocaleTabsRendereeProps) => {
    if (locales.length === 1) {
        return renderLocaleTab(locales[0]);
    }
    const [activeLocaleTab, changeLocaleTab] = useState<string>(locales[0].key);
    console.log('STYLES', styles);

    return (
        <Fragment>
            <Nav tabs>
                {locales.map(locale => (
                    <NavItem key={locale.key}>
                        <NavLink
                            onClick={() => changeLocaleTab(locale.key)}
                            className={styles.LocaleTabsRenderer__TabTitle}
                        >{locale.name}</NavLink>
                    </NavItem>
                ))}

            </Nav>
            <TabContent activeTab={activeLocaleTab}>
                {locales.map(locale => (
                    <TabPane tabId={locale.key} key={locale.key}>
                        {renderLocaleTab(locale)}
                    </TabPane>
                ))}
            </TabContent>
        </Fragment>
    );
}
