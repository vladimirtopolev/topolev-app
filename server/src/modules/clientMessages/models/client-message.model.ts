import * as mongoose from 'mongoose';
import {Model, Schema} from 'mongoose';

export interface ClientMessageProperties {
    _id: any,
    firstName: String,
    lastName: String,
    company?: String,
    phone: String,
    email: String,
    message: String,
    ownNotes?: String
    statusDates: Object,
    status: String
}

export interface ClientMessage extends mongoose.Document{

}

export const ClientMessageSchema = new Schema({
    firstName: String,
    lastName: String,
    company: String,
    phone: String,
    email: String,
    message: String,
    ownNotes: String,
    statusDates: Object,
    status: String,
    isDeleted: Boolean,
});


export const ClientMessageModel: Model<ClientMessage> = mongoose.model('ClientMessage', ClientMessageSchema);
