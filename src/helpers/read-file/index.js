const fs = require("fs").promises;

/**
 * Reads the content of a file and returns the lines
 * of it as an Array
 *
 * @param {string} filePath - path of the file
 * @returns {array} The array containing the lines
 * of the file
 */
const readFile = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, "utf8");
    const lines = data.split(/\r?\n/);
    return lines;
  } catch (err) {
    throw new Error(`Error reading file: ${err}`);
  }
};

module.exports = readFile;
