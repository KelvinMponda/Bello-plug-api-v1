import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

@Injectable()
export class UserMiddleware implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction){
        const { authorization } = req.headers;
        if(!authorization)
            return res
            .status(403)
            .send({error: 'No authentication token provided'});
        next();    
    }
}