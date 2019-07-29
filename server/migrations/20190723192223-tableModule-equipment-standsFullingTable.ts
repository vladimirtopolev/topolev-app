import * as mongoose from 'mongoose';

const {ObjectId} = mongoose.Types;
import {getMongooseConnection} from './utilities/getDBConnection';
import {TableHeader, TableHeaderProperties} from '../src/modules/table/models/tableHeader.model';
import {TableRow, TableRowProperties} from '../src/modules/table/models/tableRow.model';
import {populateTable} from './utilities/modules/table/populateTable';
import {TableProperties} from '../src/modules/table/models/table.model';

const TABLE: TableProperties = {
    _id: new ObjectId(),
    name: 'fullingStands',
    title: 'Наполнение стендов'
};
const HEADERS: TableHeaderProperties[] = [
    {
        _id: new ObjectId(),
        type: 'INPUT',
        internalName: 'title',
        name: 'Наименование',
        order: 1
    },
    {
        _id: new ObjectId(),
        type: 'IMAGE',
        internalName: 'image',
        name: 'Основное изображение',
        notLocalized: true,
        order: 2,
        properties:{
            aspectRatio:323/215
        },
    },
    {
        _id: new ObjectId(),
        type: 'IMAGE_GALLERY',
        internalName: 'image-gallery',
        name: 'Галлерея',
        notLocalized: true,
        order: 2
    },
    {
        _id: new ObjectId(),
        type: 'TEXTAREA',
        internalName: 'text',
        name: 'Описание',
        order: 2
    }
];

const ROWS: TableRowProperties[] = [
    {
        _id: new ObjectId(),
        cells: [
            {
                _id: new ObjectId(),
                header: HEADERS[0]._id,
                value: {
                    ru: 'Стеновый блок наполнение',
                    en: 'Building block'
                }
            },
            {
                _id: new ObjectId(),
                header: HEADERS[1]._id,
                value: ['https://res.cloudinary.com/dsee6uh8u/image/upload/v1563896786/equipment/100_hn1msm.jpg']
            },
            {
                _id: new ObjectId(),
                header: HEADERS[2]._id,
                value: [
                    'https://res.cloudinary.com/dsee6uh8u/image/upload/v1563896786/equipment/100-1_rrluyq.jpg'
                ]
            },
            {
                _id: new ObjectId(),
                header: HEADERS[3]._id,
                value: {
                    ru: 'Первая новость сожержание',
                    en: 'The first new content'
                }
            },
        ]
    }
];


export async function up(): Promise<void> {
    await getMongooseConnection()
        .then((config) => {
            return populateTable({TABLE, HEADERS, ROWS}, (e) => {
                if (e) {
                    console.log('ISSUE');
                } else {
                    console.log(`Migration script connect to DB: ${config.host}`);
                }
            })
        })
}

export async function down(): Promise<void> {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // return db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
}

