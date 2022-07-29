const data = require('../data/zoo_data');

const hasSex = (animal) => {
  if (animal.sex === 'male') {
    return 'male';
  } if (animal.sex === 'female') {
    return 'female';
  } return false;
};

function countAnimals(animal) {
  const { species } = data;
  const allAnimals = {};
  if (animal === undefined) {
    species.forEach((specie) => {
      allAnimals[specie.name] = specie.residents.length;
    }); return allAnimals;
  }
  if (hasSex(animal) === 'female') {
    const infoAnimal = species.find((specie) => specie.name === animal.specie);
    const filteredAnimals = infoAnimal.residents.filter((resident) => resident.sex === 'female');
    return filteredAnimals.length;
  }
  if (hasSex(animal) === 'male') {
    const infoAnimal = species.find((specie) => specie.name === animal.specie);
    const filteredAnimals = infoAnimal.residents.filter((resident) => resident.sex === 'male');
    return filteredAnimals.length;
  } const infoAnimal = species.find((specie) => specie.name === animal.specie);
  return infoAnimal.residents.length;
}

console.log(countAnimals({ specie: 'lions', sex: 'male' }));

module.exports = countAnimals;
