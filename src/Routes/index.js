import {join} from "path";

import apiRoutes from "./api/index.js";
import {Routes as Router} from 'react-router-dom';

const router = Router;


router.use("./api", apiRoutes);
//If nothing is obtained from the API call then just show the default REACT app page instead
router.use(function(req, result) {
    result.sendFile(join(__dirname, "./public/index.html"));
});
export default router;