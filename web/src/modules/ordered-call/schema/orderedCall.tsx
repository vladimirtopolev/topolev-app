import {AVAILABLE_STATUSES} from './statuses';

export interface OrderedCall {
    _id: string,
    firstName: string,
    lastName: string,
    phone: string,
    email: string
    status: AVAILABLE_STATUSES,
    statusDates: {
        [K in AVAILABLE_STATUSES]: Date
    }
}
