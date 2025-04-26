class Node<T> {
  value: T;
  next: Node<T> | null = null;
  prev: Node<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

export class LinkedList<T> {
  private head: Node<T> | null = null;
  private tail: Node<T> | null = null;
  private length = 0;

  add(item: T) {
    const node = new Node(item);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.tail!.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
  }

  addFirst(item: T) {
    const node = new Node(item);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.length++;
  }

  removeFirst(): T | undefined {
    if (!this.head) return undefined;
    const value = this.head.value;
    this.head = this.head.next;
    if (this.head) this.head.prev = null;
    else this.tail = null;
    this.length--;
    return value;
  }

  removeLast(): T | undefined {
    if (!this.tail) return undefined;
    const value = this.tail.value;
    this.tail = this.tail.prev;
    if (this.tail) this.tail.next = null;
    else this.head = null;
    this.length--;
    return value;
  }

  get(index: number): T | undefined {
    if (index < 0 || index >= this.length) return undefined;
    let node = this.head;
    for (let i = 0; i < index; i++) node = node!.next;
    return node?.value;
  }

  size(): number {
    return this.length;
  }

  clear() {
    this.head = this.tail = null;
    this.length = 0;
  }

  toArray(): T[] {
    const arr: T[] = [];
    let node = this.head;
    while (node) {
      arr.push(node.value);
      node = node.next;
    }
    return arr;
  }
}
