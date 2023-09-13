import {default as Connection} from '../../../../config.js';
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import {db} from '../Helpers/db.js';

const User = db.User;

export const userService = {
    authenticate,
    getAll,
    getById,
    create,
    update,
    delete: _delete
};
async function authenticate(_id, password){
    const user = await User.findOne({_id});
    if (user && bcrypt.compareSync(password, user.hash)) {
        const token = jwt.sign({sub: user._id},
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
async function getById(_id){ 
    return await User.findById(_id);
}
async function create(userParam){
    //this validates the user
    if (await User.findOne({_id:userParam._id}))
    {
        // eslint-disable-next-line no-throw-literal
        throw 'ID "' + userParam._id + '" is already taken';
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
    const response = await fetch(`${Connection.config}/users/${user._id}`, requestOptions);
    // eslint-disable-next-line no-undef
    return handleResponse(response);;
}
async function _delete(_id){
    await User.findByIdAndRemove(_id);
}


