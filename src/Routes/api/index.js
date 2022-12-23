
import userRoutes from "./user.routes.js"

import {Routes as Router} from 'react-router-dom';
const router = Router;
router.use("./user.routes.js", userRoutes);

export default router;