import * as mongoose from 'mongoose';

const {ObjectId} = mongoose.Types;
import {getMongooseConnection} from './utilities/getDBConnection';
import {PropertyModel, PropertyProperties} from '../src/modules/properties/models/property.model';
import {saveItems} from './utilities/db';


const PROPERTIES: PropertyProperties[] = [
    {
        _id: new ObjectId(),
        type: 'INPUT',
        name: 'Индекс, страна, город',
        internalName: 'country',
        group: 'address',
        titleGroup: 'Адрес',
        order: 1,
        notLocalized: true,
        value: {
            ru: '220021, Беларусь, Минск',
            en: '220021, Belarus, Minsk'
        },
    },
    {
        _id: new ObjectId(),
        type: 'INPUT',
        name: 'Улица, дом, офис',
        internalName: 'street',
        group: 'address',
        titleGroup: 'Адрес',
        order: 1,
        value: {
            ru: 'ул. Челюскинцев, 15-1',
            en: 'st. Cheluskincev, 15-1'
        },
    },
    {
        _id: new ObjectId(),
        type: 'INPUT',
        name: 'Телефон 01',
        internalName: 'phone1',
        titleGroup: 'Телефонные номера',
        group: 'phone',
        order: 2,
        value: {
            ru: '+375 17 273 73 00',
            en: '+375 17 273 73 00'
        },
    },
    {
        _id: new ObjectId(),
        type: 'INPUT',
        name: 'Телефон 02',
        internalName: 'phone2',
        titleGroup: 'Телефонные номера',
        group: 'phone',
        order: 2,
        value: {
            ru: '+375 17 273 73 00',
            en: '+375 17 273 73 00'
        },
    },
    {
        _id: new ObjectId(),
        type: 'INPUT',
        name: 'Телефон 02',
        internalName: 'phone2',
        titleGroup: 'Телефонные номера',
        group: 'phone',
        order: 2,
        value: {
            ru: '+375 17 273 73 00',
            en: '+375 17 273 73 00'
        },
    },
    {
        _id: new ObjectId(),
        type: 'INPUT',
        name: 'Email',
        internalName: 'completedProjects',
        order: 2,
        value: 80,
    },
    {
        _id: new ObjectId(),
        type: 'INPUT',
        name: 'Instagram',
        internalName: 'link_instagram',
        titleGroup: 'Ссылки на социальные сети',
        group: 'social',
        order: 2,
        value: 'https://www.instagram.com/leonid_nyppeli/',
    },
    {
        _id: new ObjectId(),
        type: 'TEXTAREA',
        name: 'О нас',
        internalName: 'aboutUs',
        order: 2,
        value: 'какой-то текст'
    },
    {
        _id: new ObjectId(),
        type: 'INPUT',
        name: 'МТС',
        internalName: 'phone1',
        group: 'phone',
        titleGroup: 'Телефонные номер',
        order: 1,
        value: '+7 981 400 74 03',
    },
    {
        _id: new ObjectId(),
        type: 'INPUT',
        name: 'Копирайт',
        internalName: 'copyright',
        order: 2,
        value: '2019, Удачный дом',
    },
    {
        _id: new ObjectId(),
        type: 'INPUT',
        name: 'Email',
        internalName: 'mail',
        order: 2,
        value: 'nyppeli@mail.ru',
    },
    {
        _id: new ObjectId(),
        type: 'INPUT',
        name: 'Facebook',
        internalName: 'link_fb',
        group: 'social',
        titleGroup: 'Ссылки на социальные сети',
        order: 2,
        value: 'https://www.facebook.com/profile.php?id=100034833429304',
    }
];

export async function up(): Promise<void> {
    await getMongooseConnection()
        .then((config) => {
            return saveItems(PropertyModel, PROPERTIES, (e) => {
                if (e) {
                    console.log('ISSUE');
                } else {
                    console.log(`Migration script connect to DB: ${config.host}`);
                }
            });
        });
}

export async function down(): Promise<void> {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // return db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
}

