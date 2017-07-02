

function findSum() {
	var i = 0;
	var sum = 0;
	for(i=0; i < arguments.length ; i++){
		sum = sum + arguments[i];
	}
	return sum;
}
	document.getElementById("firstSum").innerHTML = findSum(1,2,3);
	document.getElementById("secondSum").innerHTML = findSum(1,2,3,4,5,6,7,8,9,10);


