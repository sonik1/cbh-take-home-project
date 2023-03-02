const { deterministicPartitionKey } = require("./dpk");
const crypto = require("crypto");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns hex when given input", () => {
    const trivialKey = deterministicPartitionKey('arjun');
    expect(typeof(trivialKey)).toBe("string");
  });

  it('mock hash', async () => {
    const hashMock = {
      update: jest.fn().mockReturnThis(),
      digest: jest.fn().mockReturnValueOnce('encrypt'),
    };
    const createHashMock = jest.spyOn(crypto, 'createHash').mockImplementationOnce(() => hashMock);
    const trivialKey = deterministicPartitionKey('arjun');
    expect(trivialKey).toBe("encrypt");
    expect(hashMock.update).toBeCalledWith("\"arjun\"");
    expect(hashMock.digest).toBeCalledWith('hex');
    createHashMock.mockRestore();
  });
});
