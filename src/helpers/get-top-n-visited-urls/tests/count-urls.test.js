const countUrls = require("./../count-urls");
const testData = require("./data/urls-test-data.json");

describe(countUrls, () => {
  it("returns the count of urls, excluding those where status is different from 2xx", () => {
    const expected = {
      "/my-website/": 3,
      "/a-random-website": 4,
      "/a-nice-website": 1,
      "/website": 2,
    };
    expect(countUrls(testData)).toStrictEqual(expected);
  });
});
