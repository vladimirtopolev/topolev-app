import {Application, Request, Response} from 'express';
import propertiesController from './controllers/properties.controller';

export const propertiesModuleRouters = (app: Application, domainPath: string = '/api/properties') => {

    app.route(domainPath)
        .get(propertiesController.getProperties)
        .put(propertiesController.updateProperties);
};
