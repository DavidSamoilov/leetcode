/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    let isTreeBalanced = true;
    const checkHeight = (root) => {
         if(!root) return 0;
        
        let left = checkHeight(root.left);
        let right = checkHeight(root.right);
        
        if(Math.abs(left-right) > 1) isTreeBalanced = false;
        return 1 + Math.max(left,right)
        
    }
    checkHeight(root)
    return isTreeBalanced
    
};