const extractUrlSection = require("./../extract-url-section");
const testData = require("./data/urls-section-test-data.json");

test.each(testData)(
  "Returns a portion of URL with status code from: %s",
  (str, expected) => {
    expect(extractUrlSection(str)).toStrictEqual(expected);
  }
);

it("returns undefined if no match is found", () => {
  const str = `192.168.1.1 - - [07/Dec/2021:11:45:26 -0700] 200 4310`;
  const match = extractUrlSection(str);
  expect(match).toBeUndefined();
});
