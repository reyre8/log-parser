const extractIpAddress = require("./../extract-ip-address");

describe(extractIpAddress, () => {
  it("returns a match if str starts with an ip address", () => {
    const expected = "192.168.1.1";
    const str = `192.168.1.1 - - [07/Dec/2021:11:45:26 -0700] "GET /index.html HTTP/1.1" 200 4310`;
    const match = extractIpAddress(str);
    expect(match).toBe(expected);
  });

  it("returns undefined if no match is found", () => {
    const str = `The server address is 192.168.1.1`;
    const match = extractIpAddress(str);
    expect(match).toBeUndefined();
  });
});
