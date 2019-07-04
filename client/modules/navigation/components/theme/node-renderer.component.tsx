import * as React from 'react';
import {Component} from 'react';
import cn from 'classnames';
import {NodeRendererProps} from 'react-sortable-tree';


export default class NodeContentRenderer extends Component<NodeRendererProps> {
    render() {
        const {
            scaffoldBlockPxWidth,
            toggleChildrenVisibility,
            connectDragPreview,
            connectDragSource,
            isDragging,
            canDrop,
            canDrag,
            node,
            title,
            subtitle,
            draggedNode,
            path,
            treeIndex,
            isSearchMatch,
            isSearchFocus,
            icons,
            buttons,
            className,
            style,
            didDrop,
            swapFrom,
            swapLength,
            swapDepth,
            treeId, // Not needed, but preserved for other renderers
            isOver, // Not needed, but preserved for other renderers
            parentNode, // Needed for dndManager
            // @ts-ignore
            rowDirection,
            ...otherProps
        } = this.props;
        const nodeTitle = title || node.title;

        const toggleChildren = () => toggleChildrenVisibility({node, path, treeIndex});
        const nodeRenderer = node.render
            ? node.render
            : () => {
                return (
                    <div onClick={toggleChildren}>
                        {title || node.title}
                    </div>
                );
            };

        const isDraggedDescendant = draggedNode; //&& isDescendant(draggedNode, node);
        const isLandingPadActive = !didDrop && isDragging;

        const nodeContent = connectDragPreview(
            (
                <div className="rowContents"
                     onClick={() => toggleChildrenVisibility({node, path, treeIndex})}>
                    {nodeRenderer({node, toggleChildren})}
                </div>
            )
        );


        return (
            <div style={{height: '100%'}} {...otherProps}>
                <div className={"rowWrapper" + (!canDrag ? ` rowWrapperDragDisabled` : '')}>
                    <div
                        className={
                            "row" +
                            (isLandingPadActive ? ` rowLandingPad` : '') +
                            (isLandingPadActive && !canDrop ? ` rowCancelPad` : '') +
                            (className ? ` ${className}` : '')
                        }
                        style={{
                            opacity: isDraggedDescendant ? 0.9 : 1,
                            //marginLeft: scaffoldBlockPxWidth,
                            ...style,
                        }}
                    >
                        {canDrag
                            ? connectDragSource(nodeContent, {dropEffect: 'copy'})
                            : nodeContent}
                    </div>
                </div>
            </div>
        );
    }
}
