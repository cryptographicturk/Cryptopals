var bitwise = require('bitwise');

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

const xorAgainstKnown = function(hexIn) {
	return xor(hexIn,'686974207468652062756c6c277320657965');
}

console.log(xorAgainstKnown('1c0111001f010100061a024b53535009181c'));
