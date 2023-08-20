function calculator() {
    this.add = function(num1, num2,) {
        return num1 + num2;
    }
    this.subtract = function(num1, num2) {
        return num1 - num2;
    }
    this.multiply = function(num1, num2) {
        return num1 * num2;
    }
    this.divide = function(num1, num2) {
        return num1 / num2;
    }
}
const calc = new calculator();
module.exports = calc;