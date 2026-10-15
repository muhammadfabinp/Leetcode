/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
 const st = [];

    for (let c of s) {
        if (c === '(' || c === '{' || c === '[') {
                       st.push(c);
        }else{
            if (st.length === 0) {
                return false;
            }
      const last = st.pop();
            if(
                (c === ')' && last !== '(') ||
                (c === '}' && last !== '{') ||
                (c === ']' && last !== '[')
            ){
         return false;
            }
        }
    }
    return st.length === 0;
};