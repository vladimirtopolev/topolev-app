import {Application} from 'express';

import {userModuleRouters} from '../modules/user';
import {tableModuleRouters} from '../modules/table';

export default (app: Application) => {
    userModuleRouters(app);
    tableModuleRouters(app);
};

