/**
 * Verifies if str contains a portion of URL with status code
 * i.e. '"GET /index.html HTTP/1.1" 200'
 *
 * @param {string} str - string to be verified
 * @returns {object|undefined} an object containing URL and status code in the format:
 *  { path: string, statusCode: string }
 *
 * i.e. if string is '"GET /index.html HTTP/1.1" 200' the value returned is:
 *  { path: "/index.html", statusCode: "200" }
 *
 * Otherwise, it returns undefined.
 */
const extractUrlSection = (str) => {
  const urlSectionRegex =
    /"(GET|POST|PUT|PATCH|DELETE) .* HTTP\/\d+\.\d+" \d{3}/;
  const urlSectionMatch = str.match(urlSectionRegex);
  if (urlSectionMatch) {
    const urlSections = urlSectionMatch[0].split(" ");
    return {
      path: urlSections[1],
      statusCode: urlSections[3],
    };
  }
  return;
};
module.exports = extractUrlSection;
