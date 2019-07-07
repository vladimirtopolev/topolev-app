// !!!check this resource
// https://medium.com/javascript-in-plain-english/creating-a-rest-api-with-jwt-authentication-and-role-based-authorization-using-typescript-fbfa3cab22a4


import {Request, Response, NextFunction} from 'express';
import * as jwt from "jsonwebtoken";

export const jwtToken = (req: Request, res: Response, next: NextFunction) => {
    const token = <string>req.headers['auth'];
}

