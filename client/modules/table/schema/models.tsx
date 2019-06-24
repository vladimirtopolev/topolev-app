export enum HEADER_TYPES {
    INPUT = 'INPUT',
    IMAGE = 'IMAGE'
}

export interface Header {
    _id: string,
    type: HEADER_TYPES.IMAGE | HEADER_TYPES.INPUT,
    internalName: string,
    name: string,
}

export interface Cell {
    _id: string,
    type: Header | string,
    value: any
}

export interface Row {
    _id: string,
    cells: string[] | Cell[]
}

export interface Table {
    _id: string,
    name: string,
    title: string,
    headers: string[] | Header[],
    rows: string[] | Row[]
}
