const data = require('../data/zoo_data');

function getSchedule(scheduleTarget) {
  const { species } = data;
  let availability;
  species.forEach((specie) => {
    if (specie.name === scheduleTarget) {
      availability = specie.availability;
    }
  });
  return availability;
}

console.log(getSchedule());

module.exports = getSchedule;
