import * as mongoose from 'mongoose';

const {ObjectId} = mongoose.Types;
import {getMongooseConnection} from './utilities/getDBConnection';
import {TableHeader, TableHeaderProperties} from '../src/modules/table/models/tableHeader.model';
import {TableRow, TableRowProperties} from '../src/modules/table/models/tableRow.model';
import {populateTable} from './utilities/modules/table/populateTable';
import {TableProperties} from '../src/modules/table/models/table.model';

const TABLE: TableProperties = {
    _id: new ObjectId(),
    name: 'test',
    title: 'Test'
};
const HEADERS: TableHeaderProperties[] = [
    {
        _id: new ObjectId(),
        type: 'INPUT',
        internalName: 'title',
        name: 'Заголовок',
        order: 1
    },
    {
        _id: new ObjectId(),
        type: 'IMAGE',
        internalName: 'image',
        name: 'Фото стенда',
        notLocalized: true,
        properties:{
            aspectRatio: 1
        },
        order: 2
    },
    {
        _id: new ObjectId(),
        type: 'IMAGE',
        internalName: 'image2',
        name: 'Фото стенда',
        order: 2
    },
    {
        _id: new ObjectId(),
        type: 'TEXTAREA',
        internalName: 'textarea',
        name: 'Описание',
        order: 3
    },
    {
        _id: new ObjectId(),
        type: 'IMAGE_GALLERY',
        internalName: 'gallery',
        name: 'Галлерея',
        order: 4,
        notLocalized: true
    },
    {
        _id: new ObjectId(),
        type: 'IMAGE_GALLERY',
        internalName: 'gallery2',
        name: 'Галлерея',
        order: 4,
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
                    ru: 'Стенд Ferolli',
                    en: 'Stand Ferolly'
                }
            },
            {
                _id: new ObjectId(),
                header: HEADERS[1]._id,
                value: ['https://res.cloudinary.com/dix3v9vzg/image/upload/v1548243408/exposervice/001.jpg']
            },
            {
                _id: new ObjectId(),
                header: HEADERS[2]._id,
                value: {
                    ru: ['https://res.cloudinary.com/dix3v9vzg/image/upload/v1548243408/exposervice/001.jpg'],
                    en: ['https://res.cloudinary.com/dix3v9vzg/image/upload/v1548243408/exposervice/001.jpg']
                }
            },
            {
                _id: new ObjectId(),
                header: HEADERS[3]._id,
                value: {
                    ru: 'Стенд Ferolli',
                    en: 'Stand Ferolly'
                }
            },
            {
                _id: new ObjectId(),
                header: HEADERS[4]._id,
                value: [
                    'https://res.cloudinary.com/dix3v9vzg/image/upload/v1548243408/exposervice/001.jpg',
                    'https://res.cloudinary.com/dsee6uh8u/image/upload/v1563896786/equipment/100-1_rrluyq.jpg',
                    'https://res.cloudinary.com/dsee6uh8u/image/upload/v1563896786/equipment/002_bwkafl.jpg',
                    'https://res.cloudinary.com/dsee6uh8u/image/upload/v1563896786/equipment/001-2_rrylso.jpg',
                    'https://res.cloudinary.com/dsee6uh8u/image/upload/v1563896786/equipment/100_hn1msm.jpg',
                    'https://res.cloudinary.com/dsee6uh8u/image/upload/v1563896786/equipment/003_h1rehi.jpg'
                ]
            },
            {
                _id: new ObjectId(),
                header: HEADERS[5]._id,
                value: {
                    ru: ['https://res.cloudinary.com/dix3v9vzg/image/upload/v1548243408/exposervice/001.jpg'],
                    en: [ 'https://res.cloudinary.com/dsee6uh8u/image/upload/v1563896786/equipment/100-1_rrluyq.jpg']
                }
            }
        ]
    },
    {
        _id: new ObjectId(),
        cells: [
            {
                _id: new ObjectId(),
                header: HEADERS[0]._id,
                value: {
                    ru: 'Стенд XXXX',
                    en: 'Stend XXXX'
                }
            },
            {
                _id: new ObjectId(),
                header: HEADERS[1]._id,
                value: ['https://res.cloudinary.com/dix3v9vzg/image/upload/v1548243408/exposervice/001.jpg']
            },
            {
                _id: new ObjectId(),
                header: HEADERS[2]._id,
                value: {
                    ru: ['https://res.cloudinary.com/dix3v9vzg/image/upload/v1548243408/exposervice/001.jpg'],
                    en: ['https://res.cloudinary.com/dix3v9vzg/image/upload/v1548243408/exposervice/001.jpg']
                }
            },
            {
                _id: new ObjectId(),
                header: HEADERS[3]._id,
                value: {
                    ru: 'Стенд Ferolli',
                    en: 'Stand Ferolly'
                }
            },
            {
                _id: new ObjectId(),
                header: HEADERS[4]._id,
                value: [
                    'https://res.cloudinary.com/dix3v9vzg/image/upload/v1548243408/exposervice/001.jpg',
                    'https://res.cloudinary.com/dix3v9vzg/image/upload/v1548243408/exposervice/001.jpg'
                ]
            },
            {
                _id: new ObjectId(),
                header: HEADERS[5]._id,
                value: {
                    ru: ['https://res.cloudinary.com/dix3v9vzg/image/upload/v1548243408/exposervice/001.jpg'],
                    en: [ 'https://res.cloudinary.com/dsee6uh8u/image/upload/v1563896786/equipment/100-1_rrluyq.jpg']
                }
            }
        ]
    },
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

