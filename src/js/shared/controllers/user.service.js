import {default as Connection} from '../../../../config.js';
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import {db} from '../helpers/db.js';

const User = db.User;

export const userService = {
    authenticate,
    getAll,
    getById,
    create,
    update,
    delete: _delete
};
async function authenticate({id, password}){
    const user = await User.findOne({id});
    if (user && bcrypt.compareSync(password, user.hash)) {
        const token = jwt.sign({sub: user.id},
            Connection.secret,{expiresIn: '7 days'});
        return{ 
            ...user.toJSON(),
            token
        };
    }
}
async function getAll() {
    return await User.find();
}
async function getById(id){ 
    return await User.findById(id);
}
async function create(userParam){
    //this validates the user
    if (await User.findOne({id:userParam.id}))
    {
        // eslint-disable-next-line no-throw-literal
        throw 'ID "' + userParam.id + '" is already taken';
    }
    const user = new User(userParam)
    if(userParam.password){
        user.hash = bcrypt.hashSync(userParam.password, 10)
    }
    //saves the new user just created
    await user.save();
    //copys the userParam to the new User
Object.assign(User, userParam);
await User.save();
}
async function update(user){
    const requestOptions = {
        method: 'PUT',
        // eslint-disable-next-line no-undef
        headers: { ...authHeader(), 'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    };
    const response = await fetch(`${Connection.config}/users/${user.id}`, requestOptions);
    // eslint-disable-next-line no-undef
    return handleResponse(response);;
}
async function _delete(id){
    await User.findByIdAndRemove(id);
}


