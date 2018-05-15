
import venues from '../json/venues.json';

const excludeByFood = (attendees, initialValue = {}) => {
  return venues.reduce((accumulator, venue) => {
    attendees.forEach(attendee => {
      const excluded = venue.food.every(item => attendee.wont_eat.indexOf(item) !== -1);

      if (excluded) {
        accumulator[venue.name] = accumulator[venue.name] || {};
        accumulator[venue.name].food = accumulator[venue.name].food || [];
        accumulator[venue.name].food.push(attendee.name);
      }
    });

    return accumulator;
  }, initialValue);
};

const excludeByDrink = (attendees, initialValue = {}) => {
  return venues.reduce((accumulator, venue) => {
    attendees.forEach(attendee => {
      const included = venue.drinks.some(drink => attendee.drinks.indexOf(drink) !== -1);

      if (!included) {
        accumulator[venue.name] = accumulator[venue.name] || {};
        accumulator[venue.name].drinks = accumulator[venue.name].drinks || [];
        accumulator[venue.name].drinks.push(attendee.name);
      }
    });

    return accumulator;
  }, initialValue);
};

export const includedVenues = (excluded = {}) => {
  return venues
    .filter(({ name }) => Object.keys(excluded).indexOf(name) === -1)
    .map(({ name }) => name);
};

export const excludedVenues = (attendees = []) => excludeByFood(attendees, excludeByDrink(attendees));
