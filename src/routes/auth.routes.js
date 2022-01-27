import {Router} from 'express';
import * as authControllers from '../controllers/auth.controllers';



const router = Router()

router.post('/register',authControllers.registro)

export default router