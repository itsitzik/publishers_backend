const express = require('express');

const router = express.Router();

const { catchErrors } = require('@/handlers/errorHandlers');
const artistAuth = require('@/controllers/coreControllers/artistAuth');

router.route('/login').post(catchErrors(artistAuth.login));

router.route('/forgetpassword').post(catchErrors(artistAuth.forgetPassword));
router.route('/resetpassword').post(catchErrors(artistAuth.resetPassword));

router.route('/logout').post(artistAuth.isValidAuthToken, catchErrors(artistAuth.logout));

module.exports = router;
