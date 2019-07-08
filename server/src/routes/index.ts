import {Application} from 'express';

import {userModuleRouters} from '../modules/user';
import {tableModuleRouters} from '../modules/table';
import {cloudinaryModuleRouters} from '../modules/cloudinary';

export default (app: Application) => {
    userModuleRouters(app);
    tableModuleRouters(app);
    cloudinaryModuleRouters(app);
};

