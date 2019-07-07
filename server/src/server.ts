import * as express from "express";
import * as bodyParser from 'body-parser';
//@ts-ignore
import formData from 'express-form-data';
import * as morgan from 'morgan';
import rootRouter from './routes/index';
import bootDev from './boot/expressBootDevelopment';;
import * as fs from 'fs';
import * as path from 'path';

export class Server {
    app: express.Application;

    constructor() {
        this.app = express();

        this.config();
        this.routes();
    }

    public static bootstrap(): Server {
        return new Server();
    }

    getApp(): express.Application {
        return this.app;
    }

    private config() {
        // parse application/json and look for raw text
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));
        this.app.use(bodyParser.text());
        //include logger
        this.app.use(morgan('tiny'));
    }

    private routes() {
        let router : express.Router= express.Router();

        rootRouter(this.app);
        //use router middleware
        this.app.use(router);

        if (process.env.NODE_ENV === 'development') {
            bootDev(this.app, __dirname);
        }
    }

}
