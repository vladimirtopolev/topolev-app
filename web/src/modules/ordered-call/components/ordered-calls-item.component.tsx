import * as React from 'react';
import * as moment from 'moment';
import {Draggable} from 'react-beautiful-dnd';
import {CREATED, IN_PROGRESS, COMPLETED} from '../schema/statuses';
import {OrderedCall} from '../schema/orderedCall';

import * as styles from './ordered-calls-item.component.styles.css';

interface OrderedCallsItemProps {
    item: OrderedCall,
    index: number
}

export default ({item, index}: OrderedCallsItemProps) => (
    <Draggable draggableId={item._id} index={index}>
        {({draggableProps, dragHandleProps, innerRef}) => (
            <div className={styles.OrderedCallItem}
                 {...draggableProps}
                 {...dragHandleProps}
                 ref={innerRef}>
                <div className={styles.OrderedCallItem__container}>
                    <div className={styles.Field}>
                        <div className={styles.Field__name}>
                            Имя
                        </div>
                        <div className={styles.Field__value}>
                            {item.firstName}
                        </div>
                    </div>

                    <div className={styles.Field}>
                        <div className={styles.Field__name}>
                            Телефон
                        </div>
                        <div className={styles.Field__value}>
                            {item.phone}
                        </div>
                    </div>

                    <div className={styles.Field}>
                        <div className={styles.Field__name}>
                            Email
                        </div>
                        <div className={styles.Field__value}>
                            {item.email}
                        </div>
                    </div>
                    <div className={styles.Field}>
                        <div className={styles.Field__name}>
                            Комментарий
                        </div>
                        <div className={styles.Field__value}>
                            {item.email}
                        </div>
                    </div>
                </div>
                <div className={styles.OrderedCallItem__bottom}>
                    <div className={styles.DateContainer}>
                        <div className={styles.Date}>
                            <div className={styles.Date__label}>Cоздан:</div>
                            <div className={styles.Date__date}>
                                {moment(item.statusDates[CREATED]).format('DD/MM/YYYY HH:mm')}
                            </div>
                        </div>
                        <div className={styles.Date}>
                            <div className={styles.Date__label}>Принят в работу:</div>
                            <div className={styles.Date__date}>
                                {item.status === IN_PROGRESS ||  item.status === COMPLETED?
                                    moment(item.statusDates[IN_PROGRESS]).format('DD/MM/YYYY HH:mm')
                                    : '-'}
                            </div>
                        </div>
                        <div className={styles.Date}>
                            <div className={styles.Date__label}>Выполнен:</div>
                            <div className={styles.Date__date}>
                                {item.status === COMPLETED
                                    ? moment(item.statusDates[CREATED]).format('DD/MM/YYYY HH:mm')
                                    : '-'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </Draggable>
);
