/**
 * Counts the ip addresses given in an array
 *
 * @param {array} ipAddresses - array of strings (i.e. ["127.0.0.1"])
 * @returns {object} an object which keys are the ip addresses, and
 * the value of each key is the number of times the ip address
 * appears in the array. Return format:
 *  { ipAddressString: number }
 */
const countIpAddresses = (ipAddresses) => {
  return ipAddresses.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});
};

module.exports = countIpAddresses;
