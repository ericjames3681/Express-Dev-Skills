const express = require('express');
const router = express.Router();
const skillsCtrl = require('../controllers/skills');


//we will mount this router /skills

router.get('/', skillsCtrl.index);
router.post('/', skillsCtrl.create);
router.get('new', skillsCtrl.new);
router.get('/:id', skillsCtrl.show);
router.delete('/:id', skillsCtrl.delete);

module.exports = router;