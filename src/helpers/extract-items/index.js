const extractUrlSection = require("./extract-url-section");
const extractIpAddress = require("./extract-ip-address");

/**
 * Extract from each element of the array information related
 * to the urls and ip addresses
 *
 * @param {array} strArray - array of strings
 * @returns {object} object containing information of urls
 * and ip addresses in the following format:
 *  {
 *    ipAddresses: [string],
 *    urls: [{ path: string, statusCode: string }]
 *  }
 */
const extractItems = (strArray) => {
  if (!Array.isArray(strArray)) {
    throw new Error("strArray must be type array");
  }

  const ipAddresses = [];
  const urls = [];

  strArray.forEach((line) => {
    const url = extractUrlSection(line);
    const ipAddress = extractIpAddress(line);

    // Consider valid only lines that contain match ip addresses and url info
    if (url && ipAddress) {
      ipAddresses.push(ipAddress);
      urls.push(url);
    }
  });

  return {
    ipAddresses,
    urls,
  };
};

module.exports = extractItems;
