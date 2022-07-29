const data = require('../data/zoo_data');

function countEntrants(entrants) {
  let child = 0;
  let adult = 0;
  let senior = 0;
  entrants.forEach((person) => {
    const { age } = person;
    if (age <= 17) {
      child += 1;
    } else if (age > 17 && age < 50) {
      adult += 1;
    } else if (age >= 50) {
      senior += 1;
    }
  });
  const ageSeparator = { child, adult, senior };
  return ageSeparator;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const entries = countEntrants(entrants);
  const { prices } = data;
  let fullPrice = 0;
  const adultPrice = entries.adult * prices.adult;
  const childPrice = entries.child * prices.child;
  const seniorPrice = entries.senior * prices.senior;
  fullPrice = adultPrice + childPrice + seniorPrice;
  return fullPrice;
}

module.exports = { calculateEntry, countEntrants };
