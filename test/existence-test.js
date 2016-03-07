var vows = require("vows");
var assert = require("assert");

vows.describe("Test Folder").addBatch({
	"the test runner": {
		topic: 3,
		"can find a test": function (t) {
			assert.equal(3, t)
		}
	}
}).export(module);