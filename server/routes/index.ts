import {Application} from 'express';

import {userModuleRouters} from '../modules/user'

export default (app: Application) => {
    userModuleRouters(app);
};

