import * as React from 'react';
import cn from 'classnames';
import {NodeItem} from './navigation-toolbar.component';

interface NodeRendererProps {
    node: NodeItem
}

export default ({node}: NodeRendererProps) => {
    return (
        <div
            className="navigation-item__container">
            <div className={cn(
                'navigation-item__icon', 'fa', {
                    "fa-folder": !node.expanded,
                    "fa-folder-open": node.expanded
                })}>
            </div>
            <div className="navigation-item__content">
                {node.title}
            </div>
        </div>
    );
}
