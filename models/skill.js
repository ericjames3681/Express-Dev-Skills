module.exports = {
    getAll,
    getOne,
    deleteOne,
    create
};
const skills = [
    {title: 'JavaScript', level: 5},
    {title: 'Python', level: 4},
    {title: 'React', level: 5},
    {title: 'MongoDB', level: 4}
];

function create(skill) {
    skills.push(skill);
}

function deleteOne(id) {
    skills.splice(id, 1);
}

function getAll() {
    return skills;
}

function getOne(id) {
   const skillResult = skills[id];
   return skillResult;
}

//perform testing here

const results = getAll();

console.log('results: ', results);
