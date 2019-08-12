import * as express from "express";
import * as bodyParser from 'body-parser';
import * as path from 'path';
//@ts-ignore
import * as formData from 'express-form-data';
import * as morgan from 'morgan';
import rootRouter from './routes/index';
import bootDev from './boot/expressBootDevelopment';

export interface FormRequest extends Request {
    files: any;
}

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
        this.app.use(bodyParser.json({type: 'application/json'}));
        this.app.use(formData.parse());

        //include logger
        this.app.use(morgan('tiny'));
    }

    private routes() {
        let router: express.Router = express.Router();

        rootRouter(this.app);
        //use router middleware
        this.app.use(router);


        console.log('ENV', process.env.NODE_ENV);
        if (process.env.NODE_ENV === 'development') {
            bootDev(this.app, __dirname);
        }

        if (process.env.NODE_ENV === 'production') {
            this.app.use(express.static(path.join(__dirname, '..', '..', 'web')));
            this.app.get("/*", (req, res, next) => {
                res.sendFile(path.join(__dirname, '..', '..', 'web', 'index.html'));
            });
        }
    }

}
