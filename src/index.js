module.exports = function reverse (n) {
    const result = parseInt(Array.from(String(n), Number).reverse().join(''));
    return result;
}
