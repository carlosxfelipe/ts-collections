export class ArrayList<T> {
  private data: T[] = [];

  add(item: T) {
    this.data.push(item);
  }

  get(index: number): T {
    return this.data[index];
  }

  remove(index: number): T | undefined {
    return this.data.splice(index, 1)[0];
  }

  size(): number {
    return this.data.length;
  }

  clear() {
    this.data = [];
  }

  toArray(): T[] {
    return [...this.data];
  }
}
