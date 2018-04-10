var problemSet = [];

// helper functions
function isDivisible(i, num){
	return i % num == 0;
}

function fib(i){
	if (i == 1){
		return 1;
	}
	else if (i == 2){
		return 2;
	}

	else {
		return fib(i - 1) + fib(i - 2);
	}
}

function isPrime(num){
	if (num == 2){return true;}
	for (i=2; i <= Math.sqrt(num); i++){
		if (isDivisible(num, i)){
			return false;
		}
	}
	return true;
}

function primeFactors(num){
    var factors = [];
    for(var i = 2; i <= num; i++){
 	   while (isDivisible(num, i)){
    	   factors.push(i);
			num = num / i;
    	}
    }
    return factors;
}


// problem sets

problemSet[1] = function () {
	var sum = 0;
	for (i=1; i<1000; i++){
		if (isDivisible(i,3) || isDivisible(i,5)){
			sum += i;
		}
	}
	return sum;
}();

problemSet[2] = function() {
	var sum = 0;
	for (i=1; i < 4000000; i++){
		var fibn = fib(i);
		if (fibn > 4000000){
			break;
		}
		if (isDivisible(fibn, 2)){
			sum += fibn;
		}
	}
	return sum;
}();


problemSet[3] = function () {
	var factors = primeFactors(600851475143);
	return factors[factors.length - 1];
}();
