const lodash = require("lodash");
const mapProperties = require("./map-properties");

/**
 * Generates a custom map-properties configuration for the current row in the data set.
 * @param configuration
 *  the reduce-properties configuration where every value must be an array.
 *  Any `null` elements in the configuration values are replaced with the length of the previous value.
 *  `null` cannot be the first value in the value array.
 * @param previousRow
 *  the previous row data or an empty object
 * @returns {{}}
 *  the same configuration with any `null` values mapped to the length of the previous property in the previousRow object.
 *
 * @example
 *
 * getRowMapConfiguration({ "movie_id": ["movies", null, "movie_id"] }, {})
 *  returns { "movie_id": ["movies", "0", "movie_id"] }
 *
 * getRowMapConfiguration({ "movie_id": ["movies", null, "movie_id"] }, { movies: [{}, {}, {}, {}]})
 *  returns { "movie_id": ["movies", "4", "movie_id"] }
 */
function getRowMapConfiguration(configuration, previousRow) {
  return Object.entries(configuration).reduce((accumulator, [key, values]) => {
    accumulator[key] = values.map((value, index, source) =>
      value === null
        ? lodash.get(previousRow, `${source[index - 1]}.length`, 0)
        : value
    );
    return accumulator;
  }, {});
}

/**
 * Reduces an array of data by mapping properties onto array properties as objects.
 * @param uniqueField {string}
 *  the unique identifier field for the records in the array, this field is used as the key for the reduce operation.
 *  when called, the returned array will include one element for each unique field value.
 * @param configuration {Object}
 *  each key is the source property and the value is an array representing the path to the new property.
 *  Since array index values are not know at configuration time, use `null` to represent unknown index values.
 * @returns {function(*[]): *[]}
 *  a function that accepts an array and when called returns an array with one element for each unique field value.
 */
function reduceProperties(uniqueField, configuration) {
  return (data) => {
    const reducedData = data.reduce((accumulator, row) => {
      const key = row[uniqueField];
      const rowObject = accumulator[key] || {};

      const rowMapConfiguration = getRowMapConfiguration(
        configuration,
        rowObject
      );

      const rowMapper = mapProperties(rowMapConfiguration);
      accumulator[key] = lodash.merge(rowObject, rowMapper(row));
      return accumulator;
    }, {});

    return Object.values(reducedData);
  };
}

module.exports = reduceProperties;
