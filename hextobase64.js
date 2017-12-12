const hexDigitToDecimal = function(hexIn) {
        return '0123456789abcdefgh'.indexOf(hexIn);
}

const digitToBase64 = function(digitIn) {
        return 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'[digitIn];
}

const hexToBase64 = function(hexIn) {
        base64 = '';
        hexLength = hexIn.length;
        iterator = 0;
        innerIterator = 3;
	value = 0;
        while(hexLength > iterator) {
                value += Math.pow(16, innerIterator) * hexDigitToDecimal(hexIn[iterator]);
                innerIterator--;
                if(innerIterator < 0) {
                        base64 += digitToBase64(value);
                        innerIterator = 3;
                        value = 0;
                }
		iterator++;
        }
        return base64;
}

console.log(hexToBase64('49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d'));
