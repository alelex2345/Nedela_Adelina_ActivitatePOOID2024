const rle = require('./rle');

test('compress "aaabbbcc"', () => {
    expect(rle('aaabbbcc')).toBe('a3b3c2');
});

test('decompress "a3b3c2"', () => {
    expect(rle('a3b3c2', false)).toBe('aaabbbcc');
});

test('throws on invalid type', () => {
    expect(() => rle(123)).toThrow('InvalidType');
});

