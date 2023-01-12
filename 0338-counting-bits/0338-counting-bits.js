/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    
    const bits = [];

    for(let i = 0; i<=n; i++){

        bits.push(i.toString(2).split('1').length-1)
    }

    return bits
};