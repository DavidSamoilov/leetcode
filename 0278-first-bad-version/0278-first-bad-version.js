/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let lPointer = 1
        let rPointer = n
        let cur = Math.floor((rPointer + lPointer) / 2)

        if(lPointer === rPointer){
            return cur
        }
        if(isBadVersion(1)){
            return 1
        }

        while (!(isBadVersion(cur) === false && isBadVersion(cur + 1))) {
            if (isBadVersion(cur) === false) {
                lPointer = cur
            } else {
                rPointer = cur
            }
            cur = Math.floor((rPointer + lPointer) / 2)
        }

        return cur + 1
    };
};