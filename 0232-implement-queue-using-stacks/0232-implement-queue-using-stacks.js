
var MyQueue = function() {
    this.val = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.val.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    
    return this.val.shift()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.val[0]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.val.length === 0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */