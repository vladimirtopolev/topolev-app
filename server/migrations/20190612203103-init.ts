import {getMongooseConnection} from './utilities/getDBConnection';
import {saveItems} from './utilities/db'
import {UserModel, User} from '../src/modules/user/models/user.model';

const USERS: User[] = [
    new UserModel({
        username: 'i.topolev.vladimir',
        email: 'i.topolev.vladimir@gmail.com',
        firstName: 'Vladimir',
        lastName: 'Topolev',
        password: 'tel5147898'
    })
];

export async function up(): Promise<void> {
    await getMongooseConnection()
        .then((config) => {
            return saveItems(UserModel, USERS, () => {
                console.log(`Migration script connect to DB: ${config.host}`);
            });
        })
}

export async function down(): Promise<void> {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // return db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
}

