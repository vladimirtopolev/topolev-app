import * as mongoose from 'mongoose';

const {ObjectId} = mongoose.Types;
import {getMongooseConnection} from './utilities/getDBConnection';
import {PropertyModel, PropertyProperties} from '../src/modules/properties/models/property.model';
import {saveItems, dropTable} from './utilities/db';


const PROPERTIES: PropertyProperties[] = [
    {
        _id: new ObjectId(),
        type: 'INPUT',
        name: 'Индекс, страна, город',
        internalName: 'country',
        group: 'address',
        titleGroup: 'Адрес',
        order: 1,
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
        notLocalized: true,
        value: '+375 17 273 73 01',
    },
    {
        _id: new ObjectId(),
        type: 'INPUT',
        name: 'Телефон 02',
        internalName: 'phone2',
        titleGroup: 'Телефонные номера',
        group: 'phone',
        order: 2,
        notLocalized: true,
        value: '+375 17 273 73 02'
    },
    {
        _id: new ObjectId(),
        type: 'INPUT',
        name: 'Телефон 03',
        internalName: 'phone3',
        titleGroup: 'Телефонные номера',
        group: 'phone',
        order: 2,
        notLocalized: true,
        value: '+375 17 273 73 03'

    },
    {
        _id: new ObjectId(),
        type: 'INPUT',
        name: 'Email',
        internalName: 'email',
        notLocalized: true,
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
        notLocalized: true,
        value: 'https://www.instagram.com/leonid_nyppeli/',
    },
    {
        _id: new ObjectId(),
        type: 'TEXTAREA',
        name: 'О нас',
        internalName: 'aboutUs',
        order: 2,
        value: {
            ru: 'text',
            en: 'какой-то текст'
        }
    },
    {
        _id: new ObjectId(),
        type: 'INPUT',
        name: 'Копирайт',
        internalName: 'copyright',
        order: 2,
        value: {
            ru:'2019, Удачный дом',
            en: '2019, English copyright'
        },
    },
    {
        _id: new ObjectId(),
        type: 'INPUT',
        name: 'Email',
        internalName: 'mail',
        order: 2,
        notLocalized: true,
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
        notLocalized: true,
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
    await  getMongooseConnection()
        .then((config) => {
            return dropTable(PropertyModel, (e) => {
                if (e) {
                    console.log('ISSUE');
                } else {
                    console.log(`Rollbacl migration script connect to DB: ${config.host}`);
                }
            })
        })
}

