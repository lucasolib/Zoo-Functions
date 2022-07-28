const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const { species } = data;
  let animal = [];
  species.forEach((specie) => {
    const { id } = specie;
    for (let element = 0; element <= ids.length; element += 1) {
      if (id === ids[element]) {
        animal = [...animal, specie];
      }
    }
  });
  return animal;
}

module.exports = getSpeciesByIds;
