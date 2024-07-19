const express = require('express');

const { catchErrors } = require('@/handlers/errorHandlers');

const router = express.Router();

const artistController = require('@/controllers/coreControllers/artistController');
const settingController = require('@/controllers/coreControllers/settingController');
const emailController = require('@/controllers/coreControllers/emailController');

const { singleStorageUpload } = require('@/middlewares/uploadMiddleware');

// //_______________________________ Artist management_______________________________

router.route('/artist/read/:id').get(catchErrors(artistController.read));

router.route('/artist/password-update/:id').patch(catchErrors(artistController.updatePassword));

//_______________________________ Artist Profile _______________________________

router.route('/artist/profile/password').patch(catchErrors(artistController.updateProfilePassword));
router
  .route('/artist/profile/update')
  .patch(
    singleStorageUpload({ entity: 'artist', fieldName: 'photo', fileType: 'image' }),
    catchErrors(artistController.updateProfile)
  );

// //____________________________________________ API for Global Setting _________________

router.route('/setting/create').post(catchErrors(settingController.create));
router.route('/setting/read/:id').get(catchErrors(settingController.read));
router.route('/setting/update/:id').patch(catchErrors(settingController.update));
//router.route('/setting/delete/:id).delete(catchErrors(settingController.delete));
router.route('/setting/search').get(catchErrors(settingController.search));
router.route('/setting/list').get(catchErrors(settingController.list));
router.route('/setting/listAll').get(catchErrors(settingController.listAll));
router.route('/setting/filter').get(catchErrors(settingController.filter));
router
  .route('/setting/readBySettingKey/:settingKey')
  .get(catchErrors(settingController.readBySettingKey));
router.route('/setting/listBySettingKey').get(catchErrors(settingController.listBySettingKey));
router
  .route('/setting/updateBySettingKey/:settingKey?')
  .patch(catchErrors(settingController.updateBySettingKey));
router
  .route('/setting/upload/:settingKey?')
  .patch(
    catchErrors(
      singleStorageUpload({ entity: 'setting', fieldName: 'settingValue', fileType: 'image' })
    ),
    catchErrors(settingController.updateBySettingKey)
  );
router.route('/setting/updateManySetting').patch(catchErrors(settingController.updateManySetting));

// //____________________________________________ API for Email Templates _________________
router.route('/email/create').post(catchErrors(emailController.create));
router.route('/email/read/:id').get(catchErrors(emailController.read));
router.route('/email/update/:id').patch(catchErrors(emailController.update));
router.route('/email/search').get(catchErrors(emailController.search));
router.route('/email/list').get(catchErrors(emailController.list));
router.route('/email/listAll').get(catchErrors(emailController.listAll));
router.route('/email/filter').get(catchErrors(emailController.filter));

module.exports = router;
