const getTopNActiveIpAddresses = require("./../index");

describe(getTopNActiveIpAddresses, () => {
  it("returns an array of the top 2 ip addresses", () => {
    const ipAddresses = [
      "177.71.128.21",
      "168.41.191.40",
      "168.41.191.41",
      "168.41.191.40",
      "168.41.191.40",
      "168.41.191.41",
      "127.0.0.1",
    ];
    const topNumber = 2;
    const expected = ["168.41.191.40", "168.41.191.41"];

    const topTwoIpAddresses = getTopNActiveIpAddresses(ipAddresses, topNumber);
    expect(topTwoIpAddresses).toEqual(expected);
  });
});
