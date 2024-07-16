/**
 * Verifies if str starts with an ip address of format d.d.d.d (i.e. 192.168.1.1)
 *
 * @param {string} str - string to be verified
 * @returns {string|undefined} The matched ip address. Otherwise, undefined
 */
const extractIpAddress = (str) => {
  const ipRegex = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;
  const ipMatch = str.match(ipRegex);
  if (ipMatch) {
    return ipMatch[0];
  }
  return;
};

module.exports = extractIpAddress;
