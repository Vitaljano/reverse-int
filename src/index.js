module.exports = function reverse(n) {
    const arr = n.toString().split("");
    if (arr[0] === "-") {
        return parseInt(arr.slice(1).reverse().join(""));
    }
    return arr.reverse().join("");
};
