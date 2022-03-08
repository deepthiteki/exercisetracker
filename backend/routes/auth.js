const router = require('express').Router();
const {login,signUp} = require('../services/auth');

router.post('/login',login);
router.post('/sign-up',signUp);

module.exports = router;