TestMyCode.run("test hello joe function",function(assert){
		var result = hello_joe();
		//is the result as we expected?
		assert.equals("Hello",result);

});