function capitalize(word) {
    let char = word.charAt(0).toUpperCase() + word.slice(1);
    return char;
}
module.exports = capitalize;