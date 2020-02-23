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
  const skill = req.body;
  skill.level = 1;
  Skill.create(skill);
  res.redirect('/skills');
}
function deleteSkill(req, res) {
    const skillId = req.params.id;
    Skill.deleteOne(skillId);
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