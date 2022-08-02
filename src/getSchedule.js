const data = require('../data/zoo_data');

const allDays = (hours, species) => {
  const availability = {};
  Object.keys(hours).forEach((weekDay) => {
    const animals = [];
    const day = hours[weekDay];
    if (weekDay === 'Monday') {
      availability[weekDay] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
      return null;
    } species.forEach((specie) => {
      specie.availability.forEach((availabilityDay) => {
        if (availabilityDay === weekDay) {
          animals.push(specie.name);
        }
      }); const daymsg = `Open from ${day.open}am until ${day.close}pm`;
      const obj = { officeHour: daymsg, exhibition: animals };
      availability[weekDay] = obj;
    });
  }); return availability;
};

const checkAnimalAndDay = (species, hours, scheduleTarget) => {
  const weekDays = Object.keys(hours);
  const animal = species.every((specie) => specie.name !== scheduleTarget);
  const day = weekDays.every((weekDay) => weekDay !== scheduleTarget);
  if (animal === true && day === true) {
    return true;
  }
};

const getDay = (scheduleTarget, weekDay, species, hours) => {
  const animals = [];
  let availability = {};
  species.forEach((specie) => {
    specie.availability.forEach((animalDay) => {
      if (animalDay === scheduleTarget) {
        animals.push(specie.name);
      }
    });
  });
  const getWeekDay = weekDay;
  const obj = {};
  const day = hours[weekDay];
  const daymsg = `Open from ${day.open}am until ${day.close}pm`;
  obj[getWeekDay] = { officeHour: daymsg, exhibition: animals };
  availability = obj;
  return availability;
};

const monday = (scheduleTarget) => {
  if (scheduleTarget === 'Monday') {
    return { Monday: { exhibition: 'The zoo will be closed!', officeHour: 'CLOSED' } };
  }
};

function getSchedule(scheduleTarget) {
  const { species, hours } = data;
  const weekDays = Object.keys(hours);
  let availability = {};
  if (checkAnimalAndDay(species, hours, scheduleTarget) === true) {
    return allDays(hours, species);
  } if (scheduleTarget === 'Monday') {
    return monday(scheduleTarget);
  } for (let index = 0; index < weekDays.length; index += 1) {
    if (weekDays[index] === scheduleTarget) {
      const day = weekDays.filter((weekDayFilter) => scheduleTarget === weekDayFilter);
      return getDay(scheduleTarget, day, species, hours);
    }
  }
  const animal = species.filter((specie) => specie.name === scheduleTarget);
  availability = animal[0].availability;
  return availability;
}

module.exports = getSchedule;
