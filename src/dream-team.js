const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let membersFiltered = members.filter((element) => typeof element === 'string');
  let dreamTeam = [];
  if (membersFiltered.length > 0) {
    for (let i = 0; i < membersFiltered.length; i += 1) {
      let trimmed = membersFiltered[i].trim();
      dreamTeam.push(trimmed[0].toUpperCase());  
    };
  return dreamTeam.sort().join('');
  }
  return false;
}

module.exports = {
  createDreamTeam
};
