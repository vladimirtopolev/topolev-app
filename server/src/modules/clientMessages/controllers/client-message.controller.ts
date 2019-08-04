import * as mongoose from 'mongoose';
import {Request, Response} from 'express';
import {ClientMessageModel} from '../models/client-message.model';
import {CLIENT_MESSAGE_STATUSES} from '../models/client-message-statuses';
import {PropertyModel} from '../../properties/models/property.model';

class ClientMessageController {

    postClientMessage = async (req: Request, res: Response) => {
        const clientMessage = new ClientMessageModel(Object.assign(
            {},
            req.body,
            {
                statusDates: { [CLIENT_MESSAGE_STATUSES.CREATED]: new Date() },
                status: CLIENT_MESSAGE_STATUSES.CREATED
            }
        ));
        const savedClientMessage = await clientMessage.save();
        if (savedClientMessage) {
            res.json(savedClientMessage);
        }
    };

    getClientMessages = async (req: Request, res: Response) => {
        const clientMessages = await ClientMessageModel
            .find({})
            .exec();
        res.json(clientMessages);
    }
}

export default new ClientMessageController();
