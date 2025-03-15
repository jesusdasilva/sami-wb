import { Router } from 'express';
import { getEnvironmentVariables } from '../controllers/envController';

const router = Router();

router.get('/', getEnvironmentVariables);

export default router;
