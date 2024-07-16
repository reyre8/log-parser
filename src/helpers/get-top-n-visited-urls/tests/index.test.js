const getTopNVisitedUrls = require("./../index");
const testData = require("./data/urls-test-data.json");

describe(getTopNVisitedUrls, () => {
  it("", () => {
    const expected = ["/a-random-website", "/my-website/"];
    const topTwoVisitedURLs = getTopNVisitedUrls(testData, 2);
    expect(topTwoVisitedURLs).toEqual(expected);
  });
});
