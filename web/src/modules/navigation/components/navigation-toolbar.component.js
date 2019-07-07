import * as React from 'react';
import { useState } from 'react';
import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css';
import './theme/tree-renderer.css';
import ThemeNodeRenderer from './theme/node-renderer.component';
import NodeRenderer from './node-renderer.component';
var treeData = [
    {
        title: 'Chicken',
        render: NodeRenderer,
        children: [
            {
                title: 'Egg',
                render: NodeRenderer,
            },
            {
                title: 'Egg',
                render: NodeRenderer,
            },
            {
                title: 'Egg',
                render: NodeRenderer,
            }
        ]
    },
    {
        title: 'rrr',
        render: NodeRenderer,
    }
];
export default (function (props) {
    var _a = useState(treeData), tree = _a[0], changeTree = _a[1];
    return (React.createElement("div", { style: { height: 400 } },
        React.createElement(SortableTree, { treeData: tree, onChange: function (treeData) {
                changeTree(treeData);
            }, scaffoldBlockPxWidth: 30, rowHeight: 40, nodeContentRenderer: ThemeNodeRenderer })));
});
//# sourceMappingURL=navigation-toolbar.component.js.map