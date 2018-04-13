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

problemSet[6] = function(){
	var sum = 0;
	for (i=1; i <= 100; i++){
		sum += i;
	}
	var sumSquares = 0;
	for (i=1; i <= 100; i++){
		sumSquares += Math.pow(i,2);
	}
	return Math.pow(sum,2) - sumSquares;
}();


problemSet[7] = function(){
	var primeIndex = 0;
	var num = 1;
	while(primeIndex < 10001){
		num++;
		if (isPrime(num)){
			primeIndex++;
		}
	}
	return num;
}();

problemSet[8] = function(){
	var number = "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450";
	var arr = number.split('');
	var product = 1;
	for (i=0; i <= 987; i++){
		var current = 1;
		for (j=0; j<=12; j++){
			current *= arr[i+j];
		}
		if (current > product){
			product = current;
		}
	}
	return product;
}();
