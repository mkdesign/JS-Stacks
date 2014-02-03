window.onload= function(){
	var pushBtn = document.getElementById('push-btn');
	var popBtn = document.getElementById('pop-btn');
	var stack = new Array();
	pushBtn.onclick = function(){

		var str=document.getElementById('str').value;

		stack.unshift(str);
		alert(stack);

	}


}