import {join} from "path";
import express from "express";

import apiRoutes from "./api/index.js";
const router = express.Router();
router.use("./api", apiRoutes);

console.alert(router.use);
//If nothing is obtained from the API call then just show the default REACT app page instead
router.use((request, result) => {
    result.sendFile(join(__dirname, "dist", "index.html"));
});
export default router;