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
 * @return {number}
 */
var maxDepth = function(root) {
        
    const dfs = (node) => {
        
        if(node == undefined){
            return 0
        }
        
        const left = dfs(node.left)
        const right = dfs(node.right)
        
        return (right > left ? right : left) + 1
    }
    return dfs(root)
};