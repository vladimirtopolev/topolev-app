import * as mongoose from 'mongoose';

const {ObjectId} = mongoose.Types;
import {getMongooseConnection} from './utilities/getDBConnection';
import {PropertyModel, PropertyProperties} from '../src/modules/properties/models/property.model';
import {saveItems, dropTable} from './utilities/db';


const PROPERTIES: PropertyProperties[] = [
    {
        _id: new ObjectId(),
        type: 'INPUT',
        name: 'Назание компании',
        internalName: 'company',
        order: 1,
        value: {
            ru: 'OOO "Экспосервис"',
            en: '220021, Belarus, Minsk'
        },
    },
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
        name: 'Широта',
        internalName: 'latitude',
        group: 'coordinate',
        titleGroup: 'Координаты',
        order: 1,
        notLocalized: true,
        value: 53.849535
    },
    {
        _id: new ObjectId(),
        type: 'INPUT',
        name: 'Долгота',
        internalName: 'longitude',
        group: 'coordinate',
        titleGroup: 'Координаты',
        order: 1,
        notLocalized: true,
        value: 27.471748
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
            ru: `
                <p>
                Предприятие "Экспосервис" работает на рынке выставочных услуг 
                Республики Беларусь более 28 лет, начиная с 1991 года.
                </p>
                <p>
                Мы оказываем услуги по проектированию, дизайну и строительству выстовочных стендов.
                </p>
                <p>
                Залогом успеха работы гашей компании является слаженный труд команды профессионалов, 
                умение оперативно и эффективно решать разнообразные задачи, возникающие в процессе подготовки 
                и проведении выставок.
                </p>
                <p>
                Наше предприятие является генеральным подрядчиком УП "Экспоформу", один из лидеров
                национального выставочного бизнеса.
                </p>`,
            en: `
                <p>EXPOSERVICE, Ltd works on market of exhibition services of Republic of Belarus more then 28 years since 1991. 
                </p>
                <p>
                We offer such services as design and building exhibition stands
                </p>
                <p>
                Our specialists have huge experience of designing and construction of differing complexity exhibition stands.
                </p>
                <p>
                EXPOSERVICE, Ltd is general contractor of EXPOFORUM, Exhibition Company  one of national exhibition business leaders.
                </p>
            `
        },
    },
    {
        _id: new ObjectId(),
        type: 'INPUT',
        name: 'Кол-во лет на рынке',
        internalName: 'yearWork',
        order: 2,
        notLocalized:true,
        value: 28,
    },
    {
        _id: new ObjectId(),
        type: 'INPUT',
        name: 'Копирайт',
        internalName: 'copyright',
        order: 2,
        value: {
            ru: '2019, Удачный дом',
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
    await getMongooseConnection()
        .then((config) => {
            return dropTable(PropertyModel, (e) => {
                if (e) {
                    console.log('ISSUE');
                } else {
                    console.log(`Rollbacl migration script connect to DB: ${config.host}`);
                }
            });
        });
}

