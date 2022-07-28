const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const { species } = data;
  let olderThan;
  species.forEach((specie) => {
    const { name } = specie;
    if (name === animal) {
      const { residents } = specie;
      let animalAges = [];
      for (let index = 0; index < residents.length; index += 1) {
        const animalAge = residents[index].age;
        animalAges = [...animalAges, animalAge];
      }
      olderThan = animalAges.every((animalAge) => age <= animalAge);
      return olderThan;
    }
  });
  return olderThan;
}

module.exports = getAnimalsOlderThan;
