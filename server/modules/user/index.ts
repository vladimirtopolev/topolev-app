import {Application, Request, Response} from 'express';

export const userModuleRouters = (app: Application, domainPath: string = '/api/users') => {
    app.route(domainPath)
        .get((req: Request, res: Response) => {
            console.log('here');
            res.json({});
        });
};
