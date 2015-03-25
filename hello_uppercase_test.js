TestMyCode.run( "testing hello_uppercase function", function(assert){
	var result = hello_uppercase("hellooo");
	// is the result as we expected?
	 assert.equals("HELLOOO",result);

});