import express from "express";
import {authenticate, getById, register, _delete, update, getAll } from "../../js/shared/Controllers/user.controller.js";
const router = express.Router();

router.use((request, result, next)=> {
    result.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept",
        'Content-Type: application/javascript'
    );
    next();
});

router.get("/all", getAll);
router.get("/authenticate",authenticate);

router.get("/:_id",getById);

router.get("/register", register);
router.get("/update", update);
router.get("_delete", _delete);

export default router;