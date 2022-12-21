/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    if (s.length === 1){
        return 1
    }

    let len = 0

    const dic = {}

    for(string of s){
        dic[string] = (dic[string] || 0) + 1
    }
 let isAdd = false
    for(string in dic){
        if (dic[string] % 2 === 0){
            len += dic[string] 
        }else{

            len += dic[string] -1 
        }
        if(!isAdd &&dic[string] % 2 === 1 ){
            isAdd = true
            len += 1
        }
    }
    return len || 1


    
};