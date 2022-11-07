export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = undefined;
        this.tail = undefined;
        this.length = 0;
    }

    prepend(item: T): void {
        this.length += 1;
        if (this.head === undefined) {
            const node = new Node(item);
            this.head = node;
            this.tail = node;
            return;
        }
        const node = new Node(item, undefined, this.head);
        this.head.prev = node;
        this.head = node;
    }
    insertAt(item: T, idx: number): void {
        if (this.length < idx) return;
        if (idx === 0) return this.prepend(item);
        if (idx === this.length) return this.append(item);
        if (this.head === undefined) return;

        let node = this.head;
        for (let i = 0; i < idx; ++i) {
            if (node.next === undefined) return;
            node = node.next;
        }
        const newNode = new Node(item, node?.prev || undefined, node);
        if (node.prev !== undefined) {
            node.prev.next = newNode;
        }
        node.prev = newNode;
        this.length += 1;
    }
    append(item: T): void {
        if (this.head === undefined || this.tail === undefined)
            return this.prepend(item);
        this.length += 1;
        const node = new Node(item, this.tail, undefined);
        this.tail.next = node;
        this.tail = node;
    }
    remove(item: T): T | undefined {
        if (this.head === undefined) return undefined;
        let node = this.head;
        while (node.val !== item) {
            if (node.next === undefined) return undefined;
            node = node.next;
        }
        if (node === this.head) {
            this.head = this.head.next;
        }
        if (node === this.tail) {
            this.tail = this.tail.prev;
        }
        if (node.prev !== undefined) {
            node.prev.next = node.next;
        }
        if (node.next !== undefined) {
            node.next.prev = node.prev;
        }
        this.length -= 1;
        return node.val;
    }
    get(idx: number): T | undefined {
        if (this.head === undefined) return undefined;
        let node = this.head;
        for (let i = 0; i < idx; ++i) {
            if (node.next === undefined) return undefined;
            node = node.next;
        }
        return node.val;
    }
    removeAt(idx: number): T | undefined {
        if (this.head === undefined) return undefined;
        let node = this.head;
        for (let i = 0; i < idx; ++i) {
            if (node.next === undefined) return undefined;
            node = node.next;
        }
        if (node === this.head) {
            this.head = this.head.next;
        }
        if (node === this.tail) {
            this.tail = this.tail.prev;
        }
        if (node.prev !== undefined) {
            node.prev.next = node.next;
        }
        if (node.next !== undefined) {
            node.next.prev = node.prev;
        }
        this.length -= 1;
        return node.val;
    }

    toString(): string {
        if (this.head === undefined) return "";
        let node = this.head;
        let res = "";
        while (true) {
            res += `${node.toString()}, `;
            if (node.next === undefined) break;
            node = node.next;
        }
        return res.slice(0, -2);
    }
}

class Node<T> {
    public val: T;
    public next?: Node<T>;
    public prev?: Node<T>;

    constructor(
        value: T,
        prev: Node<T> | undefined = undefined,
        next: Node<T> | undefined = undefined,
    ) {
        this.val = value;
        this.prev = prev;
        this.next = next;
    }

    toString(): string {
        console.log("tests");
        return `${this.val}`;
    }
}
