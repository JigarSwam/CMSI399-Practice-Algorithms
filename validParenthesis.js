/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let mapOpen = {
        '(': 1,
        '{': 2,
        '[': 3
    },
        mapClose = {
            ')': 1,
            '}': 2,
            ']': 3
        }
    let parenStack = [];
    for (let i = 0; i < s.length; i++) {
        if (mapOpen[s[i]]) {
            parenStack.push(s[i])
        } else if (!parenStack.length || mapClose[s[i]] != mapOpen[parenStack.pop()]) {
            return false;
        }
    }
    return parenStack.length ? false : true;
};