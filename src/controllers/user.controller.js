import express from 'express';
import router from 'express.Router()';
import userService from '../../services/user-service.js';

//setting out the routes useDispatch
router.post('/authenticate',authenticate);
router.post('/register',register);
router.get('/', getAll);
router.get('/current', getCurrent);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;

function authenticate(request, result, next){
    userService.authenicate(request.body).then(user => user ? result.json(user):result.status(400).json({message: "ID or password is incorrect"})).catch(error => next(error));
}
function register(request, result, next){
    userService.create(request.body).then(() => result.json({})).catch(error => next(error));
}
function getAll(request, result, next){ 
    userService.getAll().then(users => result.json(users)).catch (error => next(error))
}
function getCurrent(request, result, next) {
    userService.getById(request.user.sub).then(user => user ? result.json(user):result.sendStatus(404)).catch(error => next(error));
}

function getById(request, result, next){ 
    userService.getByID(request.params.id).then(user => user ? result.json(user): result.sendStatus(404)).catch(error => next(error));
}
function update(request, result, next)
{
    userService.update(request.param.id, request.body).then(() => result.json({})).catch(error => next(error));
}
function _delete(request,result, next){ 
    userService.delete(request.params.id).then(() => result.json({})).catch(error => next(error));
}
