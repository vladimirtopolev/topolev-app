import * as React from 'react';
import cn from 'classnames';
import * as styles from './node-renderer.component.styles.css';
export default (function (_a) {
    var node = _a.node;
    return (React.createElement("div", { className: styles.Node },
        React.createElement("div", { className: cn(styles.Node__icon, 'fa', {
                "fa-folder": !node.expanded,
                "fa-folder-open": node.expanded
            }) }),
        React.createElement("div", { className: styles.Node__content }, node.title),
        React.createElement("div", { className: styles.Node__toolbar },
            React.createElement("button", { className: styles.Node__toolbarBtn },
                React.createElement("span", { className: "fa fa-edit" })),
            React.createElement("button", { className: styles.Node__toolbarBtn },
                React.createElement("span", { className: "fa fa-folder-plus" })),
            React.createElement("button", { className: styles.Node__toolbarBtn },
                React.createElement("span", { className: "fa fa-chevron-up" })),
            React.createElement("button", { className: styles.Node__toolbarBtn },
                React.createElement("span", { className: "fa fa-chevron-down" })),
            React.createElement("button", { className: styles.Node__toolbarBtn },
                React.createElement("span", { className: "fa fa-trash-alt" })))));
});
//# sourceMappingURL=node-renderer.component.js.map