'use strict';
/**
 * @param string String the string to be changed
 * @param [startsWithLowerCase] Boolean should start with lower case or upper case
 * @return String
 */
var cases = ['toLowerCase', 'toUpperCase'];

function crazyCase(string, startsWithLowerCase) {
    if (startsWithLowerCase === void 0) {
        startsWithLowerCase = true;
    }

    return string.split('').reduce(function(ret, letter, idx) {
        ret.push(letter[cases[+!startsWithLowerCase + idx & 1]]());
        return ret;
    }, []).join('');
}

module.exports = crazyCase;
