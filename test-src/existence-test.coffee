vows = require "vows"
assert = require "assert"

vows
  .describe "Test Folder"
  .addBatch
    "the test runner":
      topic: 3,
      "can find a test": (t) =>
        assert.equal(3, t)
.export(module);