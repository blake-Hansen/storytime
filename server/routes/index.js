const router = require('express').Router();
const controllers = require('../controllers');

router.post('/account', controllers.getAccount);
router.put('/account', controllers.createAccount);
router.get('/story', controllers.getStory);

module.exports = router;
