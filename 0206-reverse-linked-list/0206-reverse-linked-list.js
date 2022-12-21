/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if(head === null) {
        return head;
    }
 
    let current = head
    let prev = null
    let next = null
    
    while (head !== null){
        next = head.next
        current.next = prev
        prev = current
        current = next
        
        head = next
    }
    return prev
    
};