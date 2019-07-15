import * as React from 'react';
import {Droppable} from 'react-beautiful-dnd';
import OrderCallsItem from './ordered-calls-item.component';
import {OrderedCall} from '../schema/orderedCall';
import * as styles from './ordered-calls-column.component.styles.css';

interface OrderCallsColumnComponentProps {
    status: string,
    title: string,
    orderedCalls: OrderedCall[]
}

export default ({title, status, orderedCalls}: OrderCallsColumnComponentProps) => (
    <div className={styles.GroupOrderedCalls}>
        <div className={styles.GroupOrderedCalls__title}>
            {title}
        </div>
        <Droppable droppableId={status}>
            {(provided) => (
                <div className={styles.GroupOrderedCalls__content}
                     ref={provided.innerRef}
                     {...provided.droppableProps}>
                    {orderedCalls.map((call, i) => (
                        <OrderCallsItem key={call._id}
                                        index={i}
                                        item={call}/>
                    ))}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    </div>
)
