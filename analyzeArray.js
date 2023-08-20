function analyzeArray(array) {
    this.average = findAverage(array);
    this.min = findMin(array);
    this.max = findMax(array);
    this.length = array.length;

    function findMax(array) {
        let max = array[0];
        for(let i = 1; i < array.length; i++) {
            if(max < array[i]) max = array[i];
        }
        return max;
    }

    function findMin(array) {
        let min = array[0];
        for(let i = 1; i < array.length; i++) {
            if(min > array[i]) min = array[i];
        }
        return min;
    }

    function findAverage(array) {
        let num = 0;
        for(let i = 0; i < array.length; i++) {
            num += array[i];
        }
        return num/array.length;
    }
}
function createObject(array) {
    const newObject = new analyzeArray(array);
    return newObject;
}
module.exports = createObject;