import {Router} from 'react-router-dom';

import {userService} from './user.service.js';

//setting out the routes useDispatch
Router.post('/authenticate',authenticate);
Router.post('/register',register);
Router.get('/', getAll);
Router.get('/current', getCurrent);
Router.get('/:_id', getById);
Router.put('/:_id', update);
Router.delete('/:_id', _delete);



export function authenticate(request, result, next){
    userService.authenticate(request.body).then(user => {
        return user ? result.json(user) : result.status(400).json({ message: "ID or password is incorrect" });
    }).catch(error => next(error));
}
export function register(request, result, next){
    userService.create(request.body).then(() => result.json({})).catch(error => next(error));
}
export function getAll(request, result, next){ 
    userService.getAll(request.body).then(users => result.json(users)).catch (error => next(error))
}
export function getCurrent(request, result, next) {
    userService.getById(request.user.sub).then(user => user ? result.json(user):result.sendStatus(404)).catch(error => next(error));
}

export function getById(request, result, next){ 
    userService.getById(request.params._id).then(user => user ? result.json(user): result.sendStatus(404)).catch(error => next(error));
}
export function update(request, result, next)
{
    userService.update(request.param._id, request.body).then(() => result.json({})).catch(error => next(error));
}
export function _delete(request,result, next){ 
    userService.delete(request.params._id).then(() => result.json({})).catch(error => next(error));
}
