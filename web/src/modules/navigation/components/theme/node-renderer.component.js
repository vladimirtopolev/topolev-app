var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from 'react';
import { Component } from 'react';
import cn from 'classnames';
import './node-renderer.css';
var ThemeNodeContentRenderer = /** @class */ (function (_super) {
    __extends(ThemeNodeContentRenderer, _super);
    function ThemeNodeContentRenderer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ThemeNodeContentRenderer.prototype.render = function () {
        var _a;
        var _b = this.props, scaffoldBlockPxWidth = _b.scaffoldBlockPxWidth, toggleChildrenVisibility = _b.toggleChildrenVisibility, connectDragPreview = _b.connectDragPreview, connectDragSource = _b.connectDragSource, isDragging = _b.isDragging, canDrop = _b.canDrop, canDrag = _b.canDrag, node = _b.node, title = _b.title, subtitle = _b.subtitle, draggedNode = _b.draggedNode, path = _b.path, treeIndex = _b.treeIndex, isSearchMatch = _b.isSearchMatch, isSearchFocus = _b.isSearchFocus, icons = _b.icons, buttons = _b.buttons, className = _b.className, style = _b.style, didDrop = _b.didDrop, swapFrom = _b.swapFrom, swapLength = _b.swapLength, swapDepth = _b.swapDepth, treeId = _b.treeId, // Not needed, but preserved for other renderers
        isOver = _b.isOver, // Not needed, but preserved for other renderers
        parentNode = _b.parentNode, // Needed for dndManager
        // @ts-ignore
        rowDirection = _b.rowDirection, otherProps = __rest(_b, ["scaffoldBlockPxWidth", "toggleChildrenVisibility", "connectDragPreview", "connectDragSource", "isDragging", "canDrop", "canDrag", "node", "title", "subtitle", "draggedNode", "path", "treeIndex", "isSearchMatch", "isSearchFocus", "icons", "buttons", "className", "style", "didDrop", "swapFrom", "swapLength", "swapDepth", "treeId", "isOver", "parentNode", "rowDirection"]);
        var nodeTitle = title || node.title;
        var toggleChildren = function () { return toggleChildrenVisibility({ node: node, path: path, treeIndex: treeIndex }); };
        var nodeRenderer = node.render
            ? node.render
            : function () {
                return (React.createElement("div", { onClick: toggleChildren }, title || node.title));
            };
        var isDraggedDescendant = draggedNode; //&& isDescendant(draggedNode, node);
        var isLandingPadActive = !didDrop && isDragging;
        var nodeContent = connectDragPreview((React.createElement("div", { className: "rowContents", onClick: function () { return toggleChildrenVisibility({ node: node, path: path, treeIndex: treeIndex }); } }, nodeRenderer({ node: node, toggleChildren: toggleChildren }))));
        return (React.createElement("div", __assign({ style: { height: '100%' } }, otherProps),
            React.createElement("div", { className: cn('rowWrapper', { 'rowWrapperDragDisabled': !canDrag }) },
                React.createElement("div", { className: cn('row', (_a = {
                            'rowLandingPad': isLandingPadActive,
                            'rowCancelPad': isLandingPadActive && !canDrop
                        },
                        _a[className] = className,
                        _a)), style: __assign({ opacity: isDraggedDescendant ? 0.9 : 1 }, style) }, canDrag
                    ? connectDragSource(nodeContent, { dropEffect: 'copy' })
                    : nodeContent))));
    };
    return ThemeNodeContentRenderer;
}(Component));
export default ThemeNodeContentRenderer;
//# sourceMappingURL=node-renderer.component.js.map