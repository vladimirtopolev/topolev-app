export interface Locale {
    name: string,
    key: string,
    title: string
}

export enum HEADER_TYPES {
    INPUT = 'INPUT',
    IMAGE = 'IMAGE',
    TEXTAREA = 'TEXTAREA'
}

export interface TableMeta {
    name: string,
    title: string
}

export interface Header {
    _id: string,
    type: HEADER_TYPES.IMAGE | HEADER_TYPES.INPUT | HEADER_TYPES.TEXTAREA,
    internalName: string,
    notLocalized?: boolean,
    name: string,
}

export interface Cell {
    _id: string,
    header: Header,
    value: any
}

export interface Row {
    _id: string,
    cells: Cell[]
}

export interface Table {
    _id: string,
    name: string,
    title: string,
    headers: Header[],
    rows: Row[]
}
