const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length > 0 ) {
    throw new Error ('Invalid date!');
  }
  let currentMonth = date.getMonth();
  if (currentMonth === 0 || currentMonth === 1 || currentMonth === 11) {
    return 'winter';
  } 
  if (2 <= currentMonth && currentMonth <= 4) {
    return 'spring';
  }
  if (5 <= currentMonth && currentMonth <= 7) {
    return 'summer';
  }
  if (8 <= currentMonth && currentMonth <= 10) {
    return 'autumn';
  }
}

module.exports = {
  getSeason
};
