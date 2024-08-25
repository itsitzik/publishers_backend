const express = require('express');

const router = express.Router();

const { catchErrors } = require('@/handlers/errorHandlers');
const artistAuth = require('@/controllers/coreControllers/artistAuth');
const testController = require('@/controllers/testController');

router.route('/resetBoarding').get(catchErrors(testController.resetBoarding));
router.route('/login').post(catchErrors(artistAuth.login));
router.route('/register').post(catchErrors(artistAuth.register));

router.route('/forgetpassword').post(catchErrors(artistAuth.forgetPassword));
router.route('/resetpassword').post(catchErrors(artistAuth.resetPassword));

router.route('/logout').post(artistAuth.isValidAuthToken, catchErrors(artistAuth.logout));

module.exports = router;
