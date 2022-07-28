const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const { employees } = data;
  let employeer = {};
  employees.forEach((person) => {
    if (person.firstName === employeeName || person.lastName === employeeName) {
      employeer = person;
    }
  });
  return employeer;
}

console.log(getEmployeeByName('Nigel'));

module.exports = getEmployeeByName;
