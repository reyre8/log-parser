const getTopNItems = require("../get-top-n-items");
const countUrls = require("./count-urls");

/**
 * Gets the top n urls given in an array
 *
 * @param {object[]} urls - array of objects with format:
 *  [{ path: string, statusCode: string }]
 * @param {number} n - top number to retrieve
 * @returns {object} an array with the top n urls. i.e.
 *  urls = [
 *    { path: /my-website, statusCode: 200 },
 *    { path: /website-with-error, statusCode: 500 },
 *    { path: /my-website, statusCode: 200 },
 *    { path: /random-website, statusCode: 200 }
 *  ]
 *  n = 1
 *  result = ["/my-website"]
 */
const getTopNVisitedUrls = (urls, n) => {
  const urlCounts = countUrls(urls);
  return getTopNItems(urlCounts, n);
};

module.exports = getTopNVisitedUrls;
