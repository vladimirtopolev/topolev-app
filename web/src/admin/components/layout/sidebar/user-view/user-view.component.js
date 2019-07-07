import * as React from 'react';
import { useState } from 'react';
import * as styles from './user-view.component.styles.css';
import cn from 'classnames';
export default (function (_a) {
    var _b;
    var auth = _a.auth, logout = _a.logout;
    var _c = useState(false), isOpenNavbar = _c[0], toggleNavbar = _c[1];
    return (React.createElement("div", { className: styles.UserView },
        React.createElement("div", { className: styles.UserView__header },
            React.createElement("div", { className: styles.UserView__img },
                React.createElement("img", { src: require('../../../../../sources/img/no-user.png') })),
            React.createElement("div", { className: styles.UserView__description },
                React.createElement("div", { className: styles.UserView__greeting }, "\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C,"),
                React.createElement("div", { className: styles.UserView__name }, auth.firstName + " " + auth.lastName)),
            React.createElement("div", { className: styles.UserView__chevron },
                React.createElement("i", { className: cn('fa', { 'fa-chevron-right': !isOpenNavbar, 'fa-chevron-down': isOpenNavbar }), onClick: function () { return toggleNavbar(!isOpenNavbar); } }))),
        React.createElement("div", { className: cn(styles.UserView__navbar, (_b = {}, _b[styles.UserView__navbar_open] = isOpenNavbar, _b)) },
            React.createElement("ul", { className: styles.Navbar },
                React.createElement("li", { className: styles.Navbar__item },
                    React.createElement("a", { href: "#", className: styles.Navbar__link, onClick: function () { return logout(); } },
                        React.createElement("i", { className: cn(styles.Navbar__icon, 'fas fa-sign-out-alt') }),
                        "\u0412\u044B\u0439\u0442\u0438"))))));
});
//# sourceMappingURL=user-view.component.js.map