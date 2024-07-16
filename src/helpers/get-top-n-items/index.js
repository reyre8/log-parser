/**
 * Gets the top n items given in an object
 *
 * @param {boject} itemCounts - object containing as keys the items
 * to order, and the value of each key the criteria to order. Format:
 * { urlString: number }
 * @param {number} n - top number to retrieve
 * @returns {object} an array with the top n keys. i.e.
 *  itemCounts = { item1: 5, item2: 3, item3: 10 }
 *  n = 2
 *  result = ["item3", "item1"]
 */
const getTopNItems = (itemCounts, n) => {
  // Sort items
  const sortedItems = Object.entries(itemCounts).sort((a, b) => b[1] - a[1]);

  // Get the top n items
  const topNItems = sortedItems.slice(0, n).map((item) => item[0]);

  return topNItems;
};

module.exports = getTopNItems;
