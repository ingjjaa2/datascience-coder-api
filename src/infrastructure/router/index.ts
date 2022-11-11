import { Router } from 'express';
import OilFieldRoutes from './oilField.route';
import {validateToken} from '../guards/validateToken.middleware';
import HealthRoutes from './health.route';

class CustomRouter {
  createRoutes = () => {
    const router = Router();
    router.use('/api',validateToken,OilFieldRoutes.getRoutes());
    router.use('/',HealthRoutes.getRoutes());
    return router;
  };
}

export default new CustomRouter();
