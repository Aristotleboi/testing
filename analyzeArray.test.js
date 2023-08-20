const createObject = require('./analyzeArray');

test('tests a few functoins with an array of integers', () => {
    const myObject = createObject([1,8,3,4,2,6]);
    expect(myObject.average).toBe(4);
    expect(myObject.min).toBe(1);
    expect(myObject.max).toBe(8);
    expect(myObject.length).toBe(6);
});
