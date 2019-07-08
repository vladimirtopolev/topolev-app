import {Request, Response} from 'express';
import * as cloudinary from 'cloudinary'
import * as config from 'config';
import {CloudinaryConfig} from '../../../../config/configSchema';
import {FormRequest} from '../../../server';

const cloudinaryConfig: CloudinaryConfig = config.get('cloudinary');

class CloudinaryController {
    constructor(){
        cloudinary.config({
            cloud_name: cloudinaryConfig.cloudName,
            api_key: cloudinaryConfig.apiKey,
            api_secret: cloudinaryConfig.apiSecret
        });
    }

    uploadImage(req: FormRequest, res: Response) {
        console.log('UPLOAD CLOUDINARY IMAGE');
        const values = Object.values(req.files);
        const promises = values.map((image: {path: string}) => cloudinary.uploader.upload(image.path));

        Promise
            .all(promises)
            .then(results => res.json(results))
            .catch(err => {
                res.status(500).json({ error: err });
            })
    }

}

export default new CloudinaryController();
