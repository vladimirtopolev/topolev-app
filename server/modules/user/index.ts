import {Application} from 'express';
import userController from './controllers/users.controller';

export const userModuleRouters = (app: Application, domainPath: string = '/api/users') => {
    app.route(domainPath)
        .get(userController.getAllUsers);
};
