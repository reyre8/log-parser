/**
 * Counts the urls given in an array. The url count consider only
 * urls with status code 2xx
 *
 * @param {object[]} - array of objects with format:
 *  [{ path: string, statusCode: string }]
 * @returns {object} an object which keys are the urls, and
 * the value of each key is the number of times the url
 * appears in the array. Return format:
 *  { urlString: number }
 */
const countUrls = (urls) => {
  // This logic excludes all those URLs which status is different from 2xx
  const successStatusCodeRegex = /^2[0-9][0-9]$/;
  return urls.reduce((acc, item) => {
    if (item.statusCode.match(successStatusCodeRegex)) {
      acc[item.path] = (acc[item.path] || 0) + 1;
    }
    return acc;
  }, {});
};

module.exports = countUrls;
