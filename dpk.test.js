const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns partitionKey provided as string", () => {
    const event = {
      partitionKey: 5
    };
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe("5");
    expect(typeof trivialKey).toBe("string");
  });

  it("Returns hash if partitionKey is not provided", () => {
    const event = {};
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe("c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862");
  });

  it("Returns hash if partitionKey is longer than 256 characters", () => {
    const str = "#".repeat(300);
    const event = {
      partitionKey: str
    };
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe("5f3e1a5c542e41ac314a2ee2f76f210278f82d642d62ca0cb4d89650c22c078ccec98f896dd9fb57c4e187601bcc7fed97e952fe3b921a3d6db780e35a36bef6");
  });
});
