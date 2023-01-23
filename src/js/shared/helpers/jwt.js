import expressJwt from "express-jwt";
import config from '../../../../config.js';
import userService from "../Services/user-service.js";

export function jwt() {
    const secret = config.connectionString;
    return expressJwt({secret, algorithms: ['HS256'], isRevoked}).unless ({
        path: [
            '/users/authenticate',
            '/users/register'
        ]
    });
}
async function isRevoked(request, payload, done){
    const user = await userService.getById(payload.sub);
    if (!user){
        return done (null, true);
        }
        done();
}
