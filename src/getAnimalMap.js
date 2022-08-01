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

const includeNamesTrue = (locs, species) => {
  const fullAnimalsLoc = {};
  locs.forEach((location) => {
    const animalsLoc = [];
    species.forEach((specie) => {
      let animalsName = [];
      if (location === specie.location) {
        const { residents } = specie;
        const key = specie.name;
        const obj = {};
        residents.forEach((resident) => {
          animalsName = [...animalsName, resident.name];
        });
        obj[key] = animalsName;
        animalsLoc.push(obj);
      } fullAnimalsLoc[location] = animalsLoc;
    });
  });
  return fullAnimalsLoc;
};

function getAnimalMap(options) {
  const { species } = data;
  const locs = ['NE', 'NW', 'SE', 'SW'];
  if (options === undefined || options.includeNames === undefined) {
    return undefinedOptions(locs, species);
  } if (options.includeNames === true) {
    return includeNamesTrue(locs, species);
  }
}

console.log(JSON.stringify(getAnimalMap({ includeNames: true, sorted: true }), null, '\t'));

module.exports = getAnimalMap;
