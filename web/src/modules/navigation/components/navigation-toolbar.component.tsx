import * as React from 'react';
import {ReactNode, useState} from 'react';
import SortableTree from 'react-sortable-tree';
import {TreeItem} from 'react-sortable-tree';
import 'react-sortable-tree/style.css';
import './theme/tree-renderer.css';
import ThemeNodeRenderer from './theme/node-renderer.component';
import NodeRenderer from './node-renderer.component';

export interface NodeItem extends TreeItem {
}


const treeData: NodeItem[] = [
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

interface NavigationToolbarProps {
    domainPath: string
}

export default (props: NavigationToolbarProps) => {
    const [tree, changeTree] = useState<NodeItem[]>(treeData);
    return (
        <div style={{height: 400}}>
            <SortableTree treeData={tree}
                          onChange={(treeData: NodeItem[]) => {
                              changeTree(treeData);
                          }}
                          scaffoldBlockPxWidth={30}
                          rowHeight={40}
                          nodeContentRenderer={ThemeNodeRenderer}
            />
        </div>
    );
}
