function rle(input, compress = true) {
    if (typeof input !== 'string' && !(input instanceof String)) {
        throw new Error('InvalidType');
    }
    if (compress) {
        return input.replace(/(.)\1+/g, (match, p1) => p1 + match.length);
    } else {
        return input.replace(/(\D)(\d+)/g, (match, p1, p2) => p1.repeat(Number(p2)));
    }
}

module.exports = rle;

