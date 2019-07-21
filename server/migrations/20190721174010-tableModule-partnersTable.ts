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
        name: 'Наименование',
        order: 1
    },
    {
        _id: new ObjectId(),
        type: 'INPUT',
        internalName: 'url',
        name: 'URL сайта',
        notLocalized: true,
        order: 1
    },
    {
        _id: new ObjectId(),
        type: 'IMAGE',
        internalName: 'logo',
        name: 'Логотип',
        notLocalized: true,
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
                    ru: 'Экспофорум',
                    en: 'Expoforum'
                }
            },
            {
                _id: new ObjectId(),
                header: HEADERS[1]._id,
                value: 'https://expoforum.by/'
            },
            {
                _id: new ObjectId(),
                header: HEADERS[2]._id,
                value: 'https://res.cloudinary.com/dsee6uh8u/image/upload/v1563723500/expoforum_cotlci.png'
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
                    ru: 'Инфо-форум',
                    en: 'Info-forum'
                }
            },
            {
                _id: new ObjectId(),
                header: HEADERS[1]._id,
                value: 'https://infoforum.ru/'
            },
            {
                _id: new ObjectId(),
                header: HEADERS[2]._id,
                value: 'https://res.cloudinary.com/dsee6uh8u/image/upload/v1563723529/infoforum_q4jzym.png'
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
                    ru: 'STS- дизайн',
                    en: 'STS-дизайн'
                }
            },
            {
                _id: new ObjectId(),
                header: HEADERS[1]._id,
                value: 'https://www.stsdesignandprint.com/'
            },
            {
                _id: new ObjectId(),
                header: HEADERS[2]._id,
                value: 'https://res.cloudinary.com/dsee6uh8u/image/upload/v1563723538/sts-design_z58cff.png'
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

