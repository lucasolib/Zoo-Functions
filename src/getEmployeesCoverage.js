const data = require('../data/zoo_data');

const identifyObject = (object) => {
  if (object.name !== undefined) {
    return object.name;
  } if (object.id !== undefined) {
    return object.id;
  } if (object === undefined) {
    return undefined;
  }
};

const getSpecies = (responsibleFor, species) => {
  let animals = [];
  let animalNames = [];
  let locations = [];
  let animalInfos = {};
  responsibleFor.forEach((animalId) => {
    species.forEach((specie) => {
      if (specie.id === animalId) { animals = [...animals, specie]; }
    });
  });
  animals.forEach((animal) => {
    animalNames = [...animalNames, animal.name];
    locations = [...locations, animal.location];
  });
  animalInfos = { names: animalNames, locations };
  return animalInfos;
};

const verifyNameOrId = (employees, getObject) => {
  let count = 0;
  employees.forEach((employee) => {
    const { id, firstName, lastName } = employee;
    if (firstName === getObject || id === getObject || lastName === getObject) {
      count += 1;
    }
  });
  return count;
};

const employerNotDefined = (employees, species) => {
  let employeeInfo = {};
  let allEmployees = [];
  employees.forEach((employee) => {
    const { id, firstName, lastName, responsibleFor } = employee;
    const animals = getSpecies(responsibleFor, species);
    const { names, locations } = animals;
    employeeInfo = { id, fullName: `${firstName} ${lastName}`, species: names, locations };
    allEmployees = [...allEmployees, employeeInfo];
  });
  return allEmployees;
};

const getEmployeer = (employees, getObject) => {
  let employeer;
  employees.forEach((employee) => {
    const { id, firstName, lastName } = employee;
    if ((firstName === getObject || id === getObject || lastName === getObject)) {
      employeer = employee;
    }
  });
  return employeer;
};

function getEmployeesCoverage(object) {
  const { employees, species } = data;
  if (object === undefined) {
    const allEmployees = employerNotDefined(employees, species);
    return allEmployees;
  }
  let employeeInfo = {};
  const getObject = identifyObject(object);
  if (verifyNameOrId(employees, getObject) === 1) {
    const employeer = getEmployeer(employees, getObject);
    const { id, firstName, lastName, responsibleFor } = employeer;
    const animals = getSpecies(responsibleFor, species);
    const { names, locations } = animals;
    employeeInfo = { id, fullName: `${firstName} ${lastName}`, species: names, locations };
    return employeeInfo;
  } throw new Error('Informações inválidas');
}

module.exports = getEmployeesCoverage;
