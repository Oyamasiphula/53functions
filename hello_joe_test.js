TestMyCode.run("test hello joe function",function(assert){
		var result = hello_joe('joe');
		//is the result as we expected?
		assert.equals("Hello",result);

});
TestMyCode.run("test hello joe function",function(assert){
		var result = hello_joe('bob');
		//is the result as we expected?
		assert.equals("Hello",result);

});
TestMyCode.run("test hello joe function",function(assert){
		var result = hello_joe('oyama');
		//is the result as we expected?
		assert.equals("Hello, oyama",result);

});