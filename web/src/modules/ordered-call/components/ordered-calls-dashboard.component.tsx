import * as React from 'react';
import {useEffect, useState} from 'react';
import {DragDropContext} from 'react-beautiful-dnd';
import {STATUSES_ORDER, STATUSES_DESCRIPTION} from '../schema/statuses';
import OrderedCallsColumn from './ordered-calls-column.component';

import * as styles from './ordered-calls-dashboard.component.styles.css';
import {OrderedCallsDashboardContainer} from './ordered-calls-dashboard.container';


export default ({getOrderedCalls, groupedOrderedCalls}: OrderedCallsDashboardContainer) => {
    useEffect(() => {
        const timer = setInterval(getOrderedCalls, 10000);
        return () => {
            clearInterval(timer);
        };
    }), [];

    const onDragEnd = () => {
        console.log('DRAG');
    };

    return (
        <div className={styles.OrderedCallsPanel}>
            <DragDropContext
                onDragEnd={onDragEnd}>
                {STATUSES_ORDER.map(status => (
                    <OrderedCallsColumn key={status}
                                        status={status}
                                        title={STATUSES_DESCRIPTION[status].title}
                                        orderedCalls={groupedOrderedCalls[status] || []}
                    />
                ))}
            </DragDropContext>
        </div>
    );
}
