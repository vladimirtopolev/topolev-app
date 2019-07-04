import * as React from 'react';
import {ReactNode, useState} from 'react';
import SortableTree from 'react-sortable-tree';
import {TreeItem} from 'react-sortable-tree';
import 'react-sortable-tree/style.css';
import NodeRenderer from './node-renderer.component';
import NodeContentRenderer from './theme/node-renderer.component';

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
    console.log('sss');
    const [tree, changeTree] = useState<NodeItem[]>(treeData);
    return (
        <div style={{height: 400}}>
            <SortableTree treeData={tree}
                          onChange={(treeData: NodeItem[]) => {
                              changeTree(treeData);
                          }}
                          scaffoldBlockPxWidth={30}
                          nodeContentRenderer={NodeContentRenderer}
            />
        </div>
    );
}
