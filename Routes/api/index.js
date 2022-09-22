
import userRoutes from "./user.routes";
router = require("express").Router();
router.use("/user.routes.js", userRoutes);

export default router;