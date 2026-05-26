class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function buatList(arr) {

    if (arr.length === 0) return null;

    let head = new Node(arr[0]);

    let current = head;

    for (let i = 1; i < arr.length; i++) {

        current.next = new Node(arr[i]);

        current = current.next;
    }

    return head;
}

function printList(head) {

    let current = head;

    let result = "";

    while (current) {

        result += current.data + " -> ";

        current = current.next;
    }

    result += "null";

    console.log(result);
}

function palindromLL(head) {

    let arr = [];

    let current = head;

    while (current) {

        arr.push(current.data);

        current = current.next;
    }

    let reversed = [...arr].reverse();

    return JSON.stringify(arr) === JSON.stringify(reversed);
}

console.log("=== palindromLL ===");

let list1 = buatList([1,2,3,2,1]);

console.log("List 1:");
printList(list1);

console.log("palindrome?", palindromLL(list1));

let list2 = buatList([1,2,2,1]);

console.log("List 2:");
printList(list2);

console.log("palindrome?", palindromLL(list2));

let list3 = buatList([1,2,3,4,5]);

console.log("List 3:");
printList(list3);

console.log("palindrome?", palindromLL(list3));

let list4 = buatList([1]);

console.log("List 4:");
printList(list4);

console.log("palindrome?", palindromLL(list4));


function hapusDariAkhir(head, n) {

    const dummy = new Node(0);

    dummy.next = head;

    let fast = dummy;
    let slow = dummy;

    for (let i = 0; i <= n; i++) {

        fast = fast.next;
    }

    while (fast) {

        fast = fast.next;

        slow = slow.next;
    }

    slow.next = slow.next.next;

    return dummy.next;
}

console.log("\n=== hapusDariAkhir ===");

let A = buatList([1,2,3,4,5]);

console.log("sebelum 1:");
printList(A);

A = hapusDariAkhir(A, 2);

console.log("sesudah 1:");
printList(A);

let B = buatList([1,2,3,4,5]);

console.log("sebelum 2:");
printList(B);

B = hapusDariAkhir(B, 5);

console.log("sesudah 2:");
printList(B);

let C = buatList([1,2,3]);

console.log("sebelum 3:");
printList(C);

C = hapusDariAkhir(C, 1);

console.log("sesudah 3:");
printList(C);

let D = buatList([50]);

console.log("sebelum 4:");
printList(D);

D = hapusDariAkhir(D, 1);

console.log("sesudah 4:");

if (D) {
    printList(D);
} else {
    console.log("-> null");
}


function tengahLinkedList(head) {

    let slow = head;
    let fast = head;

    while (fast && fast.next) {

        slow = slow.next;

        fast = fast.next.next;
    }

    return slow;
}

console.log("\n=== tengahLinkedList ===");

let T1 = buatList([1,2,3,4,5]);

console.log("List 1:");
printList(T1);

console.log("tengah:", tengahLinkedList(T1).data);

let T2 = buatList([1,2,3,4]);

console.log("List 2:");
printList(T2);

console.log("tengah:", tengahLinkedList(T2).data);

let T3 = buatList([1]);

console.log("List 3:");
printList(T3);

console.log("tengah:", tengahLinkedList(T3).data);

let T4 = buatList([33]);

console.log("List 4:");
printList(T4);

console.log("tengah:", tengahLinkedList(T4).data);