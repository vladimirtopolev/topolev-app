import * as React from 'react';
import { useState } from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import * as styles from './locale-tabs-renderer.component.styles.css';
import cn from 'classnames';
export default (function (_a) {
    var locales = _a.locales, renderLocaleTab = _a.renderLocaleTab;
    if (locales.length === 1) {
        return renderLocaleTab(locales[0]);
    }
    var _b = useState(locales[0].key), activeLocaleTab = _b[0], changeLocaleTab = _b[1];
    return (React.createElement("div", { className: styles.LocaleTabsRenderer },
        React.createElement(Nav, { tabs: true, className: styles.Nav }, locales.map(function (locale) {
            var _a;
            return (React.createElement(NavItem, { key: locale.key, className: styles.Nav__item },
                React.createElement(NavLink, { onClick: function () { return changeLocaleTab(locale.key); }, className: cn(styles.Nav__link, (_a = {},
                        _a[styles.Nav__link_active] = activeLocaleTab === locale.key,
                        _a)) }, locale.title)));
        })),
        React.createElement(TabContent, { activeTab: activeLocaleTab, className: styles.Tabs }, locales.map(function (locale) {
            var _a;
            return (React.createElement(TabPane, { tabId: locale.key, key: locale.key, className: cn(styles.Tabs__tab, (_a = {},
                    _a[styles.Tabs__tab_active] = activeLocaleTab === locale.key,
                    _a)) }, renderLocaleTab(locale)));
        }))));
});
//# sourceMappingURL=locale-tabs-renderer.component.js.map