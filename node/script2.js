// need  to use common.js

const largeNumber = 356;

module.exports = {
    largeNumber: largeNumber
};

// the way to export it is to use module (which is an object as a property
// on the global object and has an empty object of it's own
// as a property - you fill it in)