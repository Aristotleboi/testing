function caesarCipher(string, shift) {
    let newString = '';
    for(let i = 0; i < string.length; i++) {
        let newChar = string.charCodeAt(i)
        if(((newChar > 64 && newChar < 91) && newChar + shift > 91) || ((newChar > 96 & newChar < 123) && newChar + shift > 122)) {
            newChar = checkOverLap(newChar, shift);
        } else {
            newChar = newChar + shift;
        }
        newString += String.fromCharCode(newChar);
    }
    return newString;
}
function checkOverLap(char, shift) {
    if((char > 96 && char < 123) && (char + shift > 122)) {
        for(let i = 0; i < shift; i++) {
            if(char == 122) {
                char = 96;
            }
            char += 1;
        }
        return char;
    } else if((char > 64 && char < 91) && (char + shift >90)) {
        for(let i = 0; i < shift; i++) {
            if (char == 90) {
                char  = 64;
            }
            char += 1;
        }
        return char;
    }
}

module.exports = caesarCipher;