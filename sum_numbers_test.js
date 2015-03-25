TestMyCode.run("Testing sum_numbers function" ,function(assert){
	var result = sum_numbers(10);
	//is the result the same as expected?
	assert.equals(result.toString(),[2+4+6+8+10/5].toString());

});