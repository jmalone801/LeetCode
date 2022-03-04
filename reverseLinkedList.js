// Given the head of a singly linked list, reverse the list, and return the reversed list.

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
var reverseList = function (head) {
    var temp = null;
    var newHead = null;
    while (head !== null) {
        temp = head;
        head = head.next;
        temp.next = newHead;
        newHead = temp;
    }
    return newHead;
}