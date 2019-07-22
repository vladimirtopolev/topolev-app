import * as mongoose from 'mongoose';

const {ObjectId} = mongoose.Types;
import {getMongooseConnection} from './utilities/getDBConnection';
import {TableHeader, TableHeaderProperties} from '../src/modules/table/models/tableHeader.model';
import {TableRow, TableRowProperties} from '../src/modules/table/models/tableRow.model';
import {populateTable} from './utilities/modules/table/populateTable';
import {TableProperties} from '../src/modules/table/models/table.model';

const TABLE: TableProperties = {
    _id: new ObjectId(),
    name: 'news',
    title: 'Новости'
};
const HEADERS: TableHeaderProperties[] = [
    {
        _id: new ObjectId(),
        type: 'INPUT',
        internalName: 'date',
        name: 'Дата публикации',
        notLocalized: true,
        order: 1
    },
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
        internalName: 'article_img',
        name: 'Основное изображение',
        notLocalized: true,
        order: 2
    },
    {
        _id: new ObjectId(),
        type: 'TEXTAREA',
        internalName: 'text',
        name: 'Содержание новости',
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
                value: new Date()
            },
            {
                _id: new ObjectId(),
                header: HEADERS[1]._id,
                value: {
                    ru: 'Первая новость',
                    en: 'The first new'
                }
            },
            {
                _id: new ObjectId(),
                header: HEADERS[2]._id,
                value: 'https://res.cloudinary.com/dsee6uh8u/image/upload/v1563723500/expoforum_cotlci.png'
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
    },
    {
        _id: new ObjectId(),
        cells: [
            {
                _id: new ObjectId(),
                header: HEADERS[0]._id,
                value: new Date()
            },
            {
                _id: new ObjectId(),
                header: HEADERS[1]._id,
                value: {
                    ru: 'Вторая новость',
                    en: 'The first new'
                }
            },
            {
                _id: new ObjectId(),
                header: HEADERS[2]._id,
                value: 'https://res.cloudinary.com/dsee6uh8u/image/upload/v1563723500/expoforum_cotlci.png'
            },
            {
                _id: new ObjectId(),
                header: HEADERS[3]._id,
                value: {
                    ru: 'Вторая новость сожержание',
                    en: 'The second new content'
                }
            },
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

