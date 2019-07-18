import * as mongoose from 'mongoose';

const {ObjectId} = mongoose.Types;
import {getMongooseConnection} from './utilities/getDBConnection';
import {PropertyModel, PropertyProperties} from '../src/modules/properties/models/property.model';
import {saveItems} from './utilities/db';


const PROPERTIES: PropertyProperties[] = [
    {
        _id: new ObjectId(),
        type: 'INPUT',
        name: 'Работаем с',
        internalName: 'workFromYear',
        order: 2,
        value: '2007',
    },
    {
        _id: new ObjectId(),
        type: 'INPUT',
        name: 'Vkontacte',
        internalName: 'link_vk',
        titleGroup: 'Ссылки на социальные сети',
        group: 'social',
        order: 2,
        value: 'https://vk.com/club50042773',
    },
    {
        _id: new ObjectId(),
        type: 'INPUT',
        name: 'Мегафон',
        internalName: 'phone2',
        titleGroup: 'Телефонные номера',
        group: 'phone',
        order: 1,
        value: '+7 921 465 25 01',
    },
    {
        _id: new ObjectId(),
        type: 'INPUT',
        name: 'Кол-во реализованных проектов',
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

