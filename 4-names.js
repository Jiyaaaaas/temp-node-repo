// local so no one has access to secret and it stays in this file
const secret = 'SUPER SECRET';
// share using exports object in module to give access
const john = 'john'
const peter = 'peter';

// console.log(module);

module.exports = {john, peter}; // EXPORT