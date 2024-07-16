const readFile = require("../index");

describe(readFile, () => {
  it("loads a file", async () => {
    const expected = ["test data"];
    const filePath = "src/helpers/read-file/tests/test.log";
    const data = await readFile(filePath);
    expect(data).toEqual(expect.arrayContaining(expected));
  });

  it("throws an error if the file doesn't exist", async () => {
    await expect(async () => {
      const filePath = "non-existing-file.log";
      await readFile(filePath);
    }).rejects.toThrow(/Error reading file: .*/);
  });
});
