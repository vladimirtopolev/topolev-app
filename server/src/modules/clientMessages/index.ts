import {Application, Request, Response} from 'express';
import clientMessagesController from './controllers/client-message.controller';

export const clientMessagedModuleRouters = (app: Application, domainPath: string = '/api/clientMessages') => {

    app.route(domainPath)
        .post(clientMessagesController.postClientMessage)
        .get(clientMessagesController.getClientMessages)
};
