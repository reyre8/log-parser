const extractItems = require("./../index");

describe(extractItems, () => {
  it("Extracts URL and ip information from strArray", () => {
    const strArray = [
      '177.71.128.21 - - [10/Jul/2018:22:21:28 +0200] "GET /intranet-analytics/ HTTP/1.1" 200 3574 "-" "Mozilla/5.0 (X11; U; Linux x86_64; fr-FR) AppleWebKit/534.7 (KHTML, like Gecko) Epiphany/2.30.6 Safari/534.7"',
      "192.168.1.1 - - no URL info",
      '168.41.191.40 - - [09/Jul/2018:10:11:30 +0200] "GET http://example.net/faq/ HTTP/1.1" 200 3574 "-" "Mozilla/5.0 (Linux; U; Android 2.3.5; en-us; HTC Vision Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1"',
      '168.41.191.41 - - [11/Jul/2018:17:41:30 +0200] "GET /this/page/does/not/exist/ HTTP/1.1" 404 3574 "-" "Mozilla/5.0 (Linux; U; Android 2.3.5; en-us; HTC Vision Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1"',
      'No ip address info - - [11/Jul/2018:17:41:30 +0200] "GET /api HTTP/1.1" 404',
    ];
    const expected = {
      ipAddresses: ["177.71.128.21", "168.41.191.40", "168.41.191.41"],
      urls: [
        {
          path: "/intranet-analytics/",
          statusCode: "200",
        },
        {
          path: "http://example.net/faq/",
          statusCode: "200",
        },
        {
          path: "/this/page/does/not/exist/",
          statusCode: "404",
        },
      ],
    };

    const items = extractItems(strArray);
    expect(items).toStrictEqual(expected);
  });

  it("Throws if strArray type is not an array", () => {
    expect(() => {
      extractItems(false);
    }).toThrow("strArray must be type array");
  });
});
