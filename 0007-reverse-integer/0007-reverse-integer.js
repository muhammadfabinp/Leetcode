/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
        let r = 0;

    while (x !== 0) {
 let d = x % 10;
  r = r * 10 + d;
 x = Math.trunc(x / 10);
    }
    if (r < -(2 ** 31) || r > 2 ** 31 - 1) {
        return 0;
    }
    return r;
};