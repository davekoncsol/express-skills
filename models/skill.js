

const skills = [
    {skill: 'CSS', done: true},
    {skill: 'JavaScript', done: false},
    {skill: 'HTML', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
    
  };



function getOne(id) {
  return skills[id];
}

function getAll() {
  return skills;
}

function create(skill){
    skills.push(skill);
}

function deleteOne(id){
    skills.splice(id, 1);
}

function update(id, skill){
  skills[id] = skill;
  }