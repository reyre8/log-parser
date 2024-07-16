const getTopNItems = require("./../index");

describe(getTopNItems, () => {
  it("returns an array of the top three items", () => {
    const items = {
      Item1: 7,
      Item2: 4,
      Item3: 2,
      Item4: 9,
      Item5: 6,
    };
    const expected = ["Item4", "Item1", "Item5"];

    const topThreeItems = getTopNItems(items, 3);
    expect(topThreeItems).toEqual(expected);
  });

  it("returns an array of the top three items, using the default order if all items contain the same number", () => {
    const items = {
      Item1: 2,
      Item2: 2,
      Item3: 2,
      Item4: 2,
      Item5: 2,
    };
    const expected = ["Item1", "Item2", "Item3"];

    const topThreeItems = getTopNItems(items, 3);
    expect(topThreeItems).toEqual(expected);
  });
});
