import { Router } from 'express';
const router = Router();

import passport from 'passport';
import { privates } from '../controllers/private.controller';

router.get('/private', passport.authenticate('jwt', { session: false} ), privates)

export default router;