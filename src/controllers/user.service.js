import config from '../../config';
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import db from '../helpers/db';

const User = db.User;

module.exports = {
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
            config.secret,{expiresIn: '7 days'});
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
async function _delete(id){
    await User.findByIdAndRemove(id);
}

