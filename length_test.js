QUnit.test("testing length function", function{
var result = length(5)
//*is the result the same as expected?
assert.equal(result.toString(),[6,7,8,9,10].toString());
})