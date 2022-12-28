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
var middleNode = function(head) {
  console.log(head)
  head.next
let count = 0
    let dup = head 
    while (dup != null){
        count += 1
        dup = dup.next
    }

    let spotsFromFirstNodeToMiddle = Math.floor (count / 2) 

    while (spotsFromFirstNodeToMiddle != 0){
        head=head.next
        spotsFromFirstNodeToMiddle -= 1

    }

 return head
};