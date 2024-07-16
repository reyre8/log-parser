const getUniqueAddresses = require("./../index");

describe(getUniqueAddresses, () => {
  it("Returns a set of unique ip addresses", () => {
    const ipAddressesArray = [
      "192.168.4.1",
      "192.168.1.1",
      "192.168.4.1",
      "192.168.1.1",
      "192.168.2.1",
      "192.168.2.1",
      "192.168.2.1",
      "192.168.2.1",
      "192.168.3.1",
      "192.168.1.1",
    ];

    const expected = new Set([
      "192.168.4.1",
      "192.168.1.1",
      "192.168.2.1",
      "192.168.3.1",
    ]);

    expect(getUniqueAddresses(ipAddressesArray)).toEqual(expected);
  });
});
