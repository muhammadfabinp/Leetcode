/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
        let p = strs[0];

    for (let i = 1; i < strs.length; i++) {

        while (!strs[i].startsWith(p)) {
            p = p.slice(0, p.length - 1);

            if (p === "") {
                return "";
            }
        }
    }

    return p;
};