import * as React from 'react';
import { useState } from 'react';
import * as _ from 'lodash';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import * as styles from './navbar-item.component.styles.css';
function NavbarItem(_a) {
    var _b, _c;
    var item = _a.item;
    var _d = useState(false), isOpenSubNav = _d[0], toggleSubNav = _d[1];
    var iconClassName = item.iconClassName, title = item.title, links = item.links, href = item.href;
    var existsSubNav = _.isArray(links) && links.length > 0;
    var onClickEvent = function (ev) {
        if (existsSubNav) {
            ev.preventDefault();
            toggleSubNav(!isOpenSubNav);
        }
    };
    return (React.createElement("li", { className: styles.NavbarItem },
        React.createElement(Link, { className: styles.NavbarItem__link, to: href, onClick: onClickEvent },
            React.createElement("span", { className: cn(styles.NavbarItem__icon, iconClassName) }),
            title,
            existsSubNav && React.createElement("span", { className: cn(styles.NavbarItem__chevron, (_b = {},
                    _b[styles.NavbarItem__chevron_open] = isOpenSubNav,
                    _b)) })),
        existsSubNav && (React.createElement("ul", { className: cn('NavbarItem__secondaryNav', (_c = {},
                _c['NavbarItem__secondaryNav_open'] = isOpenSubNav,
                _c)) }, links.map(function (item, i) { return React.createElement(NavbarItem, { item: item, key: i }); })))));
}
export default NavbarItem;
//# sourceMappingURL=navbar-item.component.js.map