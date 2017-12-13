var bitwise = require('bitwise');

const xor = function(hexIn1, hexIn2) {
	var inputBuffer1 = new Buffer(hexIn1, 'hex');
	var inputBuffer2 = new Buffer(hexIn2, 'hex');
	hexLength1 = hexIn1.length;
	hexLength2 = hexIn2.length;
	if(hexLength1 != hexLength2) {
		return -1;
	}
	iterator = 0;
	while(iterator < hexLength1) {
		innerIterator = 1;
		nBits = 4;
		while(innerIterator < nBits) {
			if(bitArray1[innerIterator] == bitArray2[innerIterator]) {
				binaryReturnString += '0';
			} else {
				binaryReturnString += '1';
			}
			innerIterator++;
		}
	}
}
const xor = function(hexIn1,hexIn2) {
	var inputBuffer1 = new Buffer(hexIn1, 'hex');
	var inputBuffer2 = new Buffer(hexIn2, 'hex');
	bitLength1 = hexIn1.length * 4;
	bitLength2 = hexIn2.length * 4;
	if(bitLength1 != bitLength2) {
		return -1;
	}
	bitIterator = 0;
	var binaryReturnString = '';
	bitArray1 = bitwise.readBuffer(inputBuffer1);
	bitArray2 = bitwise.readBuffer(inputBuffer2);
	while(bitIterator < bitLength1) {
		if(bitArray1[bitIterator] == bitArray2[bitIterator]) {
			binaryReturnString += '0';
		} else {
			binaryReturnString += '1';
		}
		bitIterator++;
	}
	var returnBits = bitwise.toBits(binaryReturnString);
	returnBuffer = new Buffer(returnBits, 'binary');
	return returnBuffer.toString();
}

const xorAgainstKnown = function(hexIn) {
	return xor(hexIn,'686974207468652062756c6c277320657965');
}

console.log(xorAgainstKnown('1c0111001f010100061a024b53535009181c'));
