const getTopNItems = require("../get-top-n-items");
const countIpAddresses = require("./count-ip-addresses");

/**
 * Gets the top n of ip addresses given in an array
 *
 * @param {array} ipAddresses - array of ip addresses (with or without repetition)
 * @param {number} n - top number to retrieve
 * @returns {object} an array with the top n ip addresses. i.e.
 *  ipAddresses = ["127.0.0.1", "192.1.168.1", "127.0.0.1"]
 *  n = 1
 *  result = ["127.0.0.1"]
 */
const getTopNActiveIpAddresses = (ipAddresses, n) => {
  const ipAddressCounts = countIpAddresses(ipAddresses);
  return getTopNItems(ipAddressCounts, n);
};

module.exports = getTopNActiveIpAddresses;
