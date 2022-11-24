import {Routes as Router}from 'react-router-dom';
import {authenticate,getById, register, _delete,update, getAll } from "../../server/controllers/user.controller";
const router = Router;

router.use((request, result, next)=> {
    result.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );
    next();
});
router.get(`/all`, getAll);
router.get(`/authenticate`,authenticate);

router.get(`/:id`,getById);

router.get(`/register`, register);
router.get(`/update`, update);
router.get(`_delete`, _delete);
export default router;