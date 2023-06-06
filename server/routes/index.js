const router = require('express').Router();
const controllers = require('../controllers');

router.get('/account', controllers.getAccount);
router.post('/account', controllers.createAccount);
router.get('/story', controllers.getStory);

module.exports = router;
