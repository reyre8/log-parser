const readFile = require("./helpers/read-file");
const extractItems = require("./helpers/extract-items");
const getUniqueAddresses = require("./helpers/get-unique-addresses");
const getTopNVisitedUrls = require("./helpers/get-top-n-visited-urls");
const getTopNActiveIpAddresses = require("./helpers/get-top-n-active-ip-addresses");

const main = async () => {
  // Reading the file and extracting URLs and ip addresses information
  const filePath = "datasource/programming-task-example-data.log";
  const lines = await readFile(filePath);
  const items = extractItems(lines);

  // Determining task requirements
  const uniqueAddresses = getUniqueAddresses(items.ipAddresses);
  const top3MostVisitedUrls = getTopNVisitedUrls(items.urls, 3);
  const top3MostActiveIpAddresses = getTopNActiveIpAddresses(
    items.ipAddresses,
    3
  );

  // Outputting results
  console.log("Number of unique IP addresses:", uniqueAddresses.size);
  console.log("The top 3 most visited URLs:", top3MostVisitedUrls.join(" "));
  console.log(
    "The top 3 most active IP addresses:",
    top3MostActiveIpAddresses.join(" ")
  );
};

module.exports = main;
