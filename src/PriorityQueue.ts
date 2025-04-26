type Comparator<T> = (a: T, b: T) => number;

export class PriorityQueue<T> {
  private data: T[] = [];
  private compare: Comparator<T>;

  constructor(compareFn?: Comparator<T>) {
    this.compare = compareFn ?? ((a, b) => (a as any) - (b as any));
  }

  enqueue(item: T) {
    this.data.push(item);
    this.bubbleUp();
  }

  dequeue(): T | undefined {
    if (this.data.length === 0) return undefined;
    const min = this.data[0];
    const end = this.data.pop()!;
    if (this.data.length > 0) {
      this.data[0] = end;
      this.bubbleDown();
    }
    return min;
  }

  peek(): T | undefined {
    return this.data[0];
  }

  size(): number {
    return this.data.length;
  }

  isEmpty(): boolean {
    return this.data.length === 0;
  }

  clear() {
    this.data = [];
  }

  private bubbleUp() {
    let idx = this.data.length - 1;
    const element = this.data[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.data[parentIdx];
      if (this.compare(element, parent) >= 0) break;
      this.data[parentIdx] = element;
      this.data[idx] = parent;
      idx = parentIdx;
    }
  }

  private bubbleDown() {
    let idx = 0;
    const length = this.data.length;
    const element = this.data[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let swap = null;
      let leftChild, rightChild;
      if (leftChildIdx < length) {
        leftChild = this.data[leftChildIdx];
        if (this.compare(leftChild, element) < 0) swap = leftChildIdx;
      }
      if (rightChildIdx < length) {
        rightChild = this.data[rightChildIdx];
        if (
          (swap === null && this.compare(rightChild, element) < 0) ||
          (swap !== null && this.compare(rightChild, leftChild!) < 0)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.data[idx] = this.data[swap];
      this.data[swap] = element;
      idx = swap;
    }
  }
}
