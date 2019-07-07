import {Request, Response} from 'express';
import {UserModel} from '../models/user.model';

class UsersController {
    getAllUsers = (req: Request, res: Response) => {
        UserModel.find({})
            .exec()
            .then(users => res.json(users))
            .catch(err => res.status(500).json({error: 'Server DB error'}))
    }
}

export default new UsersController();
