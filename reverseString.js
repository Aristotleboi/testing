function reverseString(string) {
    length = string.length -1;
    let newString = '';
    for(let i = 0; i < string.length; i++) {
        newString += string.charAt(length);
        length = length -1;
    }
    return newString;
}
module.exports = reverseString;