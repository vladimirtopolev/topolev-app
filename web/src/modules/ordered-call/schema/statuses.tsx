export const enum STATUSES {
    CREATED = 'CREATED',
    IN_PROGRESS = 'IN-PROGRESS',
    COMPLETED = 'COMPLETED',
    ARCHIVED = 'ARCHIVED'
}

export const CREATED = STATUSES.CREATED;
export const IN_PROGRESS = STATUSES.IN_PROGRESS;
export const COMPLETED = STATUSES.COMPLETED;
export const ARCHIVED = STATUSES.ARCHIVED;

export type AVAILABLE_STATUSES = STATUSES.ARCHIVED | STATUSES.COMPLETED | STATUSES.IN_PROGRESS | STATUSES.CREATED;


export const STATUSES_ORDER = [
    CREATED,
    IN_PROGRESS,
    COMPLETED
];

export const STATUSES_DESCRIPTION: {
    [K in AVAILABLE_STATUSES] : {title: string}
} = {
    [STATUSES.CREATED]: {
        title: 'Заказы на звонок'
    },
    [STATUSES.IN_PROGRESS]:   {
        title: 'В обработке'
    },
    [STATUSES.COMPLETED]:  {
        title: 'Обработанные звонки'
    },
    [STATUSES.ARCHIVED]: {
        title: 'Зархивированные звонки'
    }
};

