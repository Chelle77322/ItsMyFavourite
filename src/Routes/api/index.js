
import userRoutes from "./user.routes";

import {Routes as Router} from 'react-router-dom';
const router = Router;
router.use("./user.routes", userRoutes);

export default router;