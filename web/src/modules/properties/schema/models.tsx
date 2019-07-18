import {HEADER_TYPES} from '../../table/schema/models';

export interface Property {
    _id: string,
    type: HEADER_TYPES.IMAGE | HEADER_TYPES.INPUT | HEADER_TYPES.TEXTAREA,
    internalName: string,
    order: number,
    group?: string,
    value: any
}
