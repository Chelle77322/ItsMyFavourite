import { Router } from 'express';
import {UserService} from '../services/user-service';

//setting out the routes useDispatch
Router.post('/authenticate',authenticate);
Router.post('/register',register);
Router.get('/', getAll);
Router.get('/current', getCurrent);
Router.get('/:id', getById);
Router.put('/:id', update);
Router.delete('/:id', _delete);

module.exports = Router;

function authenticate(request, result, next){
    UserService.authenicate(request.body).then(user => user ? result.json(user):result.status(400).json({message: "ID or password is incorrect"})).catch(error => next(error));
}
function register(request, result, next){
    UserService.create(request.body).then(() => result.json({})).catch(error => next(error));
}
function getAll(request, result, next){ 
    UserService.getAll().then(users => result.json(users)).catch (error => next(error))
}
function getCurrent(request, result, next) {
    UserService.getById(request.user.sub).then(user => user ? result.json(user):result.sendStatus(404)).catch(error => next(error));
}

function getById(request, result, next){ 
    UserService.getByID(request.params.id).then(user => user ? result.json(user): result.sendStatus(404)).catch(error => next(error));
}
function update(request, result, next)
{
    UserService.update(request.param.id, request.body).then(() => result.json({})).catch(error => next(error));
}
function _delete(request,result, next){ 
    UserService.delete(request.params.id).then(() => result.json({})).catch(error => next(error));
}
