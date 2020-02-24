const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    delete: deleteSkill,
    new: newSkill,
    create
};

function newSkill(req, res) {
  res.render('skills/new');
}

function create(req, res) {
  Skill.create(req.body);
  res.redirect('/skills');
}
function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}
function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll()
    });
  }

function show(req, res) {
    const skillId = req.params.id;
    const skill = Skill.getOne(skillId);
    res.render('skills/show', {
        skill,
        skillId
    });

}