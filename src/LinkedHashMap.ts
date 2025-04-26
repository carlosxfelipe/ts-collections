export class LinkedHashMap<K, V> {
  private data = new Map<K, V>();

  set(key: K, value: V) {
    this.data.set(key, value);
  }

  get(key: K): V | undefined {
    return this.data.get(key);
  }

  has(key: K): boolean {
    return this.data.has(key);
  }

  delete(key: K) {
    this.data.delete(key);
  }

  size(): number {
    return this.data.size;
  }

  clear() {
    this.data.clear();
  }

  keys(): K[] {
    return Array.from(this.data.keys());
  }

  values(): V[] {
    return Array.from(this.data.values());
  }

  entries(): [K, V][] {
    return Array.from(this.data.entries());
  }
}
