const router = require('express').Router();
import { register, login } from '../controllers/auth-controller';

router.post('/register', register);
router.post('/login', login);

module.exports = router;
