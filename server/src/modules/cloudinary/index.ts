import {Application, Request, Response} from 'express';
import cloudinaryController from './controllers/cloudinary.controller';

export const cloudinaryModuleRouters = (app: Application, domainPath: string = '/api/cloudinary') => {
    app.route(`${domainPath}/image-upload`)
        .post((req: Request, res: Response) => cloudinaryController.uploadImage(req as any, res));
};
