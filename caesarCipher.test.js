const caesarCipher = require('./caesarCipher');

test('a caeser cipher that should shift the letters up accordingly', () => {
    expect(caesarCipher('a', 7)).toBe('h');
});
test('caeser cipher whole word' , () => {
    expect(caesarCipher('trouble', 7)).toBe('ayvbisl')
})
