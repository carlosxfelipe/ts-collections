export class HashSet<T> {
  private data = new Set<T>();

  add(item: T) {
    this.data.add(item);
  }

  delete(item: T) {
    this.data.delete(item);
  }

  has(item: T): boolean {
    return this.data.has(item);
  }

  size(): number {
    return this.data.size;
  }

  clear() {
    this.data.clear();
  }

  values(): T[] {
    return Array.from(this.data);
  }
}
