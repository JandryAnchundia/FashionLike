import {Router} from 'express';
import * as authControllers from '../controllers/auth.controllers';



const router = Router()

router.post('/register',authControllers.registro)
router.post('/login',authControllers.login)
router.get('/verify/:token',authControllers.verifyEmail)


export default router