import {join} from "path";

import router from "./api/index.js";
import {Routes as Router} from 'react-router-dom';

const apiRoutes = Router;


router.use("./api", apiRoutes);
//If nothing is obtained from the API call then just show the default REACT app page instead
router.use(function(req, result) {
    result.sendFile(join(__dirname, "./build/main.html"));
});
export default router;