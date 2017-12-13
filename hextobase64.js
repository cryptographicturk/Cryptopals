var bitwise = require('bitwise');

const numberToBase64 = function(numberIn) {
       	return 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'[numberIn];
}

const hexToBase64 = function(hexIn) {
	var buffer = new Buffer(hexIn, 'hex');
	bitIterator = 0;
	bitLength = hexIn.length * 4;
	returnString = '';
	while(bitLength > bitIterator) {
		number6bits = bitwise.readUInt(buffer, bitIterator, 6);
		returnString += numberToBase64(number6bits);
		bitIterator+=6;
	}
	return returnString;
}

console.log(hexToBase64('49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d'));
