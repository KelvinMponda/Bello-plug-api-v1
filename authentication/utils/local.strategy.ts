import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthenticationService } from "../authentication.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(
        @Inject('AUTHENTICAION_SERVICE') private readonly authenticatioService: AuthenticationService
    ) {
        super();
    }

    async validate(username: string, password: string) {
       const user = await this.authenticatioService.validateUser(username, password); 
       if (!user) {
        throw new UnauthorizedException();
       }
       return user;
    } 

}