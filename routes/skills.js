const express = require('express');
const router = express.Router();
const skillsCtrl = require('../controllers/skills');


//we will mount this router /skills

router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.new);
router.delete('/:id', skillsCtrl.delete);
router.get('/:id', skillsCtrl.show);
router.post('/', skillsCtrl.create);

module.exports = router;