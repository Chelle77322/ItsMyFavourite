import path from "path";
import express from "express";
import userRoutes from "./user.routes.js"

const router = express.Router();
router.use("/user.routes", userRoutes);
router.use((request, result)=> {
    result.sendFile(path.join__dirname, "dist","index.html");
});
console.log(router);
export default router;