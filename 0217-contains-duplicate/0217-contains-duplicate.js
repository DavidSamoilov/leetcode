/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const dic = {}

    for(let i = 0; i<nums.length; i++){
        if(dic[nums[i]]){
            return true
        }else{
            dic[nums[i]] = true
        }
    }
    return false
    
};