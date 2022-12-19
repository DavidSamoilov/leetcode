/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // instinct
    // this is recursive 

    // simple case n = 1
    // output 1

    // simple case n = 2
    // output 2

    // simple case n = 3
    // output 3

    // simple case n = 4
    // output 5
    // 1 + 1 + 1 + 1 , 2+2, 1+2+1 1+1+2,2+1+1

    // simple case n = 5
    // output 8
    // 1+1+1+1+1, 2+1+1+1,1+2+1+1,1+1+2+1,+1+1+1+2, 2+2+1 2+1+2 1+2+2  
    
    // if(n <= 3){
    //     return n
    // }

    // return climbStairs(n-1) + climbStairs(n - 2)
 
    
    let first = 0
    let second = 1
    
    for(let i =0; i<=n; i++){
        let third = first + second
        first = second
        second = third
    }
    return first
    
};