const router = require('express').Router();

const { postWords } = require('./../controllers/secretword');
/* GET users listing. */
router.post('/', postWords);

module.exports = router;
