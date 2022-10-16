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
  let res = [];
  if (!Array.isArray(members)) return false;

  members.forEach(e => {
    if (typeof e === 'string') res.push(e.trim().toLowerCase().slice(0,1))
  })
  res.sort( (a,b) => a.charCodeAt(0) - b.charCodeAt(0))
  return res.join('').toUpperCase();
}

module.exports = {
  createDreamTeam
};
