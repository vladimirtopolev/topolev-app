import * as React from 'react';
import { adminNavbarLinks } from '../../../../../config/admin-navbar.config';
import NavbarItem from './navbar-item.component';
import * as styles from './navbar.component.styles.css';
export default (function () {
    return (React.createElement("div", { className: styles.Navbar },
        React.createElement("div", { className: styles.Navbar__title }, "\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435 \u043C\u0435\u043D\u044E"),
        React.createElement("div", { className: styles.Navbar__content },
            React.createElement("ul", { className: styles.Navbar__navbar }, adminNavbarLinks.map(function (item, i) {
                return React.createElement(NavbarItem, { item: item, key: i });
            })))));
});
//# sourceMappingURL=navbar.component.js.map