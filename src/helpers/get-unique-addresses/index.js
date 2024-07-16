/**
 * Gets a unique set of ip addresses
 *
 * @param {array} urls - array of ip addresses
 * @returns {Set} set of ip addresses
 */
const getUniqueAddresses = (ipAddressesArray) => {
  return new Set(ipAddressesArray);
};

module.exports = getUniqueAddresses;
