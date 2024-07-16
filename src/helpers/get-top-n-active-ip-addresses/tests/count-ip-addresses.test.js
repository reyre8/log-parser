const countIpAddresses = require("./../count-ip-addresses");

describe(countIpAddresses, () => {
  it("Returns the count of ip addresses", () => {
    const ipAddresses = [
      "177.71.128.21",
      "168.41.191.40",
      "168.41.191.41",
      "168.41.191.40",
      "168.41.191.40",
      "168.41.191.41",
      "127.0.0.1",
    ];

    const expected = {
      "177.71.128.21": 1,
      "168.41.191.40": 3,
      "168.41.191.41": 2,
      "127.0.0.1": 1,
    };

    expect(countIpAddresses(ipAddresses)).toStrictEqual(expected);
  });
});
