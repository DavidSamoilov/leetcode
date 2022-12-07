/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let isAnagram = true
    const firstWordDict = {}
    const secondWordDict = {}
    
    if(s.length !== t.length){
        return false
    }

    
        const firstWordArr = s.split("")
        const secondWordArr = t.split("")

        for(let i = 0; i < s.length; i++){
            if(firstWordDict[firstWordArr[i]]){
                firstWordDict[firstWordArr[i]] += 1;
            }else{
                firstWordDict[firstWordArr[i]] = 1;
            }

            if(secondWordDict[secondWordArr[i]]){
                secondWordDict[secondWordArr[i]] += 1;
            }else{
                secondWordDict[secondWordArr[i]] = 1;
            }
        }


        console.log(firstWordDict)
        console.log(secondWordDict)
        for(let i = 0; i < s.length; i++){
            if(firstWordDict[firstWordArr[i]] !== secondWordDict[firstWordArr[i]]){
                return false
            }
        }



    
    return isAnagram
};