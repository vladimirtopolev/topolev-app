import {Application} from 'express';

import {userModuleRouters} from '../modules/user';
import {tableModuleRouters} from '../modules/table';
import {cloudinaryModuleRouters} from '../modules/cloudinary';
import {propertiesModuleRouters} from '../modules/properties'
import {clientMessagedModuleRouters} from '../modules/clientMessages';

export default (app: Application) => {
    userModuleRouters(app);
    tableModuleRouters(app);
    cloudinaryModuleRouters(app);
    propertiesModuleRouters(app);
    clientMessagedModuleRouters(app);
};

