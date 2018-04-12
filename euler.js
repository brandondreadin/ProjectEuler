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

function isPalindrome(n){
	var str = n.toString();
	var reverse = str.split("").reverse().join("");
	if (str == reverse){
		return true;
	}
	else {return false;}
}

function primeFactorization (num){
	//returns array of prime factorization
	if (num == 1){
		return [1];
	}
	var primes = [];
	var i = 2;

	while (i <= num){
		if (isPrime(i) && num%i==0){
			primes.push(i);
			num /= i;
		}
		else{i++;}
	}
	return primes;
}


function numOccurrences(arr, n){
	arr.sort();
	var x = arr.indexOf(n);
	if (x == -1){return 0;}
	
	var occurences = 1;
	for (i = x+1; x <= arr.length -1; i++){
		if (arr[i] != n){
			return occurences;
		}
		else{occurences++;}
	}
	return occurences;
}

function lcm(arr){
	//returns least common multiple of numbers in array using prime factorization method
	var product = 1;
	var primesArr = [];
	
	for (index=0; index <= arr.length - 1; index++){
		primesArr.push(primeFactorization(arr[index]));
	}

	var maxArr = Math.max.apply(Math, arr);
	for (j=2; j <= maxArr; j++){
		if(!isPrime(j)){continue;}


		// finds the highest power for prime j 
		var highestPower = 0;
		for (k=0; k <= primesArr.length - 1; k++){
			var numOcc = numOccurrences(primesArr[k], j);
			if (numOcc > highestPower){
				highestPower = numOcc;
			}
		}

		if (highestPower){
			product *= Math.pow(j,highestPower);
		}
	}
	return product;
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


problemSet[4] = function () {
	var palindromes = [];

	for (i = 100; i < 1000; i++){
		for (j = 100; j < 1000; j++){
			var product = i*j;
			if (isPalindrome(product)){
				palindromes.push(product);
			}
		}
	}
	
	var max = Math.max.apply(Math, palindromes);
	return max;
}();

problemSet[5] = function () {
	/*
	//brute force code
	var i = 2520;
	var match = false;

	while (true){
		for (j=20; j > 1; j--){
			if (i%j){
				break;
			}
			if (j==2){
				match = true;
			}
		}

		if (match){
			return i;
		}
		else {i+=20;}
	}*/
	return lcm([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);
}();