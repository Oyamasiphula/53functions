TestMyCode.run("testing hello world function", function(assert){
	
		 var result = hello();
    	// is the result as we expected?
    	assert.equals("hello world", result);
}); 

TestMyCode.run( "testing hello_uppercase function", function(assert){
	var result = hello_uppercase("hellooo");
	// is the result as we expected?
	 assert.equals("HELLOOO",result);
});
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
TestMyCode.run("Testing number_list function", function(assert){
	var result = number_list(5);
	//Are the results as expected?
	assert.equals(result.toString(),[1,2,3,4,5].toString());
}); 
TestMyCode.run("Testing sum_numbers function" ,function(assert){
	//*the 5 is just referenced as n from our function's parameter and it also represent internal feedback [results()] 
	var result = sum_numbers(5);
	//*is the result the same as expected?
	assert.equals(result.toString(),[1+2+3+4+5].toString());
	//*[1+2+3+4+5].toString()); and The toString() method returns a string representing object!
});

TestMyCode.run("testing length function", function(assert){
var result = length(5);
//*is the result the same as expected?
assert.equals(result.toString(),[6,7,8,9,10].toString());
})

TestMyCode.run("test upper function",function(assert){
		var result = upper('siphula');
		//is the result as we expected?
		assert.equals("SIPHULA",result);
	});

TestMyCode.run("test reverse function",function(assert){
		var result = Reverse('siphula');
		//is the result as we expected?
		assert.equals(['a','l','u','h','p','i','s'].toString(),result.toString());
	});

TestMyCode.run("test hello list function",function(assert){
		var result = hello_list(2);
             // To test my code expected results  
        assert.equals("hello World hello World ",result);
});

