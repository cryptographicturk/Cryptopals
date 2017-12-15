var bitwise = require('bitwise');
var HashTable = require('hashtable');

var englishFreqHash = new HashTable();
englishFreqHash.put('E', {value: '12.02'});
englishFreqHash.put('T', {value: '9.10'});
englishFreqHash.put('A', {value: '8.12'});
englishFreqHash.put('O', {value: '7.68'});
englishFreqHash.put('I', {value: '7.31'});
englishFreqHash.put('N', {value: '6.95'});
englishFreqHash.put('S', {value: '6.28'});
englishFreqHash.put('R', {value: '6.02'});
englishFreqHash.put('H', {value: '5.92'});
englishFreqHash.put('D', {value: '4.32'});
englishFreqHash.put('L', {value: '3.98'});
englishFreqHash.put('U', {value: '2.88'});
englishFreqHash.put('C', {value: '2.71'});
englishFreqHash.put('M', {value: '2.61'});
englishFreqHash.put('F', {value: '2.30'});
englishFreqHash.put('Y', {value: '2.11'});
englishFreqHash.put('W', {value: '2.09'});
englishFreqHash.put('G', {value: '2.03'});
englishFreqHash.put('P', {value: '1.82'});
englishFreqHash.put('B', {value: '1.49'});
englishFreqHash.put('V', {value: '1.11'});
englishFreqHash.put('K', {value: '0.69'});
englishFreqHash.put('X', {value: '0.17'});
englishFreqHash.put('Q', {value: '0.11'});
englishFreqHash.put('J', {value: '0.10'});
englishFreqHash.put('Z', {value: '0.07'});

var englishFreqArrayDesc = ['E','T','A','O','I','N','S','R','H','D','L','U','C','M','F','Y','W','G','P','B','V','K','X','Q','J','Z'];

const xor = function(hexIn1, hexIn2) {
	var inputBuffer1 = new Buffer(hexIn1, 'hex');
	var inputBuffer2 = new Buffer(hexIn2, 'hex');
	bitLength1 = hexIn1.length * 4;
	bitLength2 = hexIn2.length * 4;
	if(bitLength1 != bitLength2) {
		return -1;
	}
	iterator = 0;
	bitArray1 = bitwise.readBuffer(inputBuffer1);
	bitArray2 = bitwise.readBuffer(inputBuffer2);
	returnArray = [];
	while(iterator < bitLength1) {
		if(bitArray1[iterator] == bitArray2[iterator]) {
			returnArray[iterator] = 0;
		} else {
			returnArray[iterator] = 1;
		}
		iterator++;
	}
	var hexdata = bitwise.createBuffer(returnArray);
	return hexdata.toString('hex');
}

const xorChar = function(hexIn, charIn) {
	var hexBuffer = new Buffer(hexIn, 'hex');
	var charBuffer = new Buffer(charIn, 'ascii');
	bitLength = hexIn.length * 4;
	bitArray = bitwise.readBuffer(hexBuffer);
	charArray = bitwise.readBuffer(charBuffer);
	hexIterator = 0;
	charIterator = 0;
	returnArray = [];
	while(iterator < bitLength) {
		if(bitArray[iterator] == charArray[charIterator]) {
			returnArray[iterator] = 0;
		} else {
			returnArray[iterator] = 1;
		}
		iterator++;
		charIterator++;
		if(charIterator == 8) {
			charIterator = 0;
		}
	}
	var hexdata = bitwise.createBuffer(returnArray);
	return hexdata.toString('hex');
}


