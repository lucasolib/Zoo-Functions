const data = require('../data/zoo_data');

function isManager(id) {
  const { employees } = data;
  let count = 0;
  let isMan;
  employees.forEach((person) => {
    const { managers } = person;
    managers.forEach((manager) => {
      if (manager === id) {
        count += 1;
      }
    });
  });
  if (count > 0) {
    isMan = true;
    return isMan;
  }
  isMan = false;
  return isMan;
}

function getRelatedEmployees(managerId) {
  const { employees } = data;
  const isMan = isManager(managerId);
  let relatedEmployees = [];
  if (isMan === true) {
    employees.forEach((person) => {
      const { managers } = person;
      managers.forEach((manager) => {
        if (manager === managerId) {
          relatedEmployees = [...relatedEmployees, `${person.firstName} ${person.lastName}`];
        }
      });
    });
    return relatedEmployees;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

console.log(getRelatedEmployees('0e7b460e-acf4-4e17-bcb3-ee472265db83'));
// console.log(getRelatedEmployees('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = { isManager, getRelatedEmployees };
