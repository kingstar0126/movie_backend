const lodash = require("lodash");

/**
 * Creates af function to map the properties of an object to different properties on a new object.
 * @param configuration {Object}
 *  each key is the source property and the value is either a "." delimited string or an array representing the path to the new property.
 * @returns {(function(*=): (*))|*}
 *  a function that accepts an object and when called will return a new object with the source properties mapped to the target properties as specified in the configuration.
 */
function mapProperties(configuration) {
  return (data) => {
    if (data) {
      return Object.entries(data).reduce((accumulator, [key, value]) => {
        return lodash.set(accumulator, configuration[key] || key, value);
      }, {});
    }
    return data;
  };
}

module.exports = mapProperties;
