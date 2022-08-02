const data = require('../data/zoo_data');

const undefinedOptions = (locs, species) => {
  const fullAnimalsLoc = {};
  locs.forEach((location) => {
    const animalsLoc = [];
    species.forEach((specie) => {
      if (location === specie.location) {
        animalsLoc.push(specie.name);
      }
      fullAnimalsLoc[location] = animalsLoc;
    });
  });
  return fullAnimalsLoc;
};

const getFilteredSex = (options, residents) => {
  let animalsName = [];
  if (options.sex === undefined) {
    residents.forEach((resident) => {
      animalsName = [...animalsName, resident.name];
    });
  } else {
    const filteredResidents = residents.filter((resident) => resident.sex === options.sex);
    filteredResidents.forEach((resident) => {
      animalsName = [...animalsName, resident.name];
    });
  }
  return animalsName;
};

const getAnimalByLoc = (location, species) => {
  const animal = [];
  species.forEach((specie) => {
    if (specie.location === location) {
      animal.push(specie);
    }
  });
  return animal;
};

function getAnimalMap(options) {
  const { species } = data;
  const locs = ['NE', 'NW', 'SE', 'SW'];
  const fullAnimalsLoc = {};
  if (options === undefined || options.includeNames === undefined) {
    return undefinedOptions(locs, species);
  } locs.forEach((location) => {
    const animalsLoc = [];
    const animals = getAnimalByLoc(location, species);
    animals.forEach((specie) => {
      const { residents } = specie;
      const obj = {};
      const filteredAnimals = getFilteredSex(options, residents);
      const animalsName = (options.sorted === true) ? filteredAnimals.sort() : filteredAnimals;
      obj[specie.name] = animalsName;
      animalsLoc.push(obj);
      fullAnimalsLoc[location] = animalsLoc;
    });
  }); return fullAnimalsLoc;
}

module.exports = getAnimalMap;
