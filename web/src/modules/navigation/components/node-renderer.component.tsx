import * as React from 'react';
import cn from 'classnames';
import {NodeItem} from './navigation-toolbar.component';
import * as styles from './node-renderer.component.styles.css';

interface NodeRendererProps {
    node: NodeItem
}

export default ({node}: NodeRendererProps) => {
    return (
        <div className={styles.Node}>
            <div className={cn(
                styles.Node__icon, 'fa', {
                    "fa-folder": !node.expanded,
                    "fa-folder-open": node.expanded
                })}>
            </div>
            <div className={styles.Node__content}>
                {node.title}
            </div>
            <div className={styles.Node__toolbar}>
                <button className={styles.Node__toolbarBtn}>
                    <span className="fa fa-edit">
                    </span>
                </button>
                <button className={styles.Node__toolbarBtn}>
                    <span className="fa fa-folder-plus">
                    </span>
                </button>
                <button className={styles.Node__toolbarBtn}>
                     <span className="fa fa-chevron-up">
                    </span>
                </button>
                <button className={styles.Node__toolbarBtn}>
                     <span className="fa fa-chevron-down">
                    </span>
                </button>
                <button className={styles.Node__toolbarBtn}>
                    <span className="fa fa-trash-alt">
                    </span>
                </button>
            </div>
        </div>
    );
}
