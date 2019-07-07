import * as React from 'react';
import * as styles from './admin-layout.component.styles.css';
import Header from './header/header.component';
import Sidebar from './sidebar/sidebar.component';
;
export default (function (props) { return (React.createElement("div", { className: styles.AdminLayout },
    React.createElement("div", { className: styles.AdminLayout__wrapper },
        React.createElement("div", { className: styles.AdminLayout__header },
            React.createElement(Header, null)),
        React.createElement("div", { className: styles.AdminLayout__content },
            React.createElement("div", { className: styles.AdminLayout__sidebar },
                React.createElement(Sidebar, null)),
            React.createElement("div", { className: styles.AdminLayout__page }, props.children()))))); });
//# sourceMappingURL=admin-layout.component.js.map