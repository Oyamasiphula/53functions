TestMyCode.run("test reverse function",function(assert){
		var result = Reverse('siphula');
		//is the result as we expected?
		assert.equals(['a','l','u','h','p','i','s'].toString(),result.toString());
	});