class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    
    prepend(data) {
        const newNode = new Node(data);

        newNode.next = this.head;
        this.head = newNode;

        this.length++;
    }


    removeHead() {
        if (!this.head) return null;

        const removed = this.head.data;
        this.head = this.head.next;

        this.length--;

        return removed;
    }

    print() {
        let current = this.head;
        let result = '[top]';

        while (current) {
            result += `${current.data} -> `;
            current = current.next;
        }

        result += 'null';

        console.log(result);
    }
}

class Stack {
    constructor() {
        this.list = new LinkedList();
    }

    push(data) {
        this.list.prepend(data);
    }

    pop() {
        return this.list.removeHead();
    }

    peek() {
        return this.list.head
            ? this.list.head.data
            : null;
    }

    isEmpty() {
        return this.list.length === 0;
    }

    // ukuran stack
    size() {
        return this.list.length;
    }

    print() {
        this.list.print();
    }
}


console.log("=== Stack Dasar ===");

const stack = new Stack();

console.log("isEmpty:", stack.isEmpty());

stack.push(10);
stack.push(20);
stack.push(30);

console.log("peek:", stack.peek());
console.log("size:", stack.size());

stack.print();

console.log("pop:", stack.pop());

stack.print();

console.log("size:", stack.size());
console.log("isEmpty:", stack.isEmpty());


console.log("\n=== Simulasi Undo/Redo ===");

const undoStack = new Stack();
const redoStack = new Stack();

const actions = [
    'ketik "Hello"',
    'ketik "World"',
    'hapus "World"',
    'ketik "JavaScript"'
];

console.log("\nLakukan aksi:");

for (let action of actions) {
    console.log("Aksi:", action);

    undoStack.push(action);

    // kosongkan redo saat aksi baru dilakukan
    redoStack.list.head = null;
    redoStack.list.length = 0;
}

console.log("\nUndo aksi:");
undoStack.print();

// undo 3 kali
console.log("\nUndo 3 kali:");

for (let i = 0; i < 3; i++) {
    const action = undoStack.pop();

    if (action) {
        console.log("Redo:", action);
        redoStack.push(action);
    }
}

console.log("\nredo 1 kali:");

const redoAction = redoStack.pop();

if (redoAction) {
    console.log("Undo:", redoAction);
    undoStack.push(redoAction);
}

console.log("\nStatus akhir:");

console.log("Undo Stack:");
undoStack.print();

console.log("Redo Stack:");
redoStack.print();