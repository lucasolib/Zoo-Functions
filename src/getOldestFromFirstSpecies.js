const data = require('../data/zoo_data');

const searchEmployeer = (id) => {
  const { employees } = data;
  let employeer = {};
  employees.forEach((employee) => {
    if (employee.id === id) {
      employeer = employee;
      return employeer;
    }
  });
  return employeer;
};

function getOldestFromFirstSpecies(id) {
  const { species } = data;
  let infoOldest;
  const employee = searchEmployeer(id);
  species.forEach((specie) => {
    if (specie.id === employee.responsibleFor[0]) {
      let oldest = specie.residents[0];
      specie.residents.forEach((resident) => {
        if (resident.age > oldest.age) {
          oldest = resident;
        }
        infoOldest = [oldest.name, oldest.sex, oldest.age];
        return infoOldest;
      });
      return infoOldest;
    }
  });
  return infoOldest;
}

// console.log(searchEmployeer('c1f50212-35a6-4ecd-8223-f835538526c2'));
console.log(getOldestFromFirstSpecies('c1f50212-35a6-4ecd-8223-f835538526c2'));

module.exports = getOldestFromFirstSpecies;
