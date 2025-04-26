type Comparator<K> = (a: K, b: K) => number;

class TreeMapNode<K, V> {
  key: K;
  value: V;
  left: TreeMapNode<K, V> | null = null;
  right: TreeMapNode<K, V> | null = null;

  constructor(key: K, value: V) {
    this.key = key;
    this.value = value;
  }
}

export class TreeMap<K, V> {
  private root: TreeMapNode<K, V> | null = null;
  private compare: Comparator<K>;
  private _size = 0;

  constructor(compareFn?: Comparator<K>) {
    this.compare = compareFn ?? ((a, b) => (a as any) - (b as any));
  }

  set(key: K, value: V): void {
    if (!this.root) {
      this.root = new TreeMapNode(key, value);
      this._size++;
      return;
    }
    let node = this.root;
    while (true) {
      const cmp = this.compare(key, node.key);
      if (cmp === 0) {
        node.value = value;
        return;
      }
      if (cmp < 0) {
        if (!node.left) {
          node.left = new TreeMapNode(key, value);
          this._size++;
          return;
        }
        node = node.left;
      } else {
        if (!node.right) {
          node.right = new TreeMapNode(key, value);
          this._size++;
          return;
        }
        node = node.right;
      }
    }
  }

  get(key: K): V | undefined {
    let node = this.root;
    while (node) {
      const cmp = this.compare(key, node.key);
      if (cmp === 0) return node.value;
      node = cmp < 0 ? node.left : node.right;
    }
    return undefined;
  }

  has(key: K): boolean {
    return this.get(key) !== undefined;
  }

  size(): number {
    return this._size;
  }

  keys(): K[] {
    const arr: K[] = [];
    function inOrder(node: TreeMapNode<K, V> | null) {
      if (!node) return;
      inOrder(node.left);
      arr.push(node.key);
      inOrder(node.right);
    }
    inOrder(this.root);
    return arr;
  }

  values(): V[] {
    const arr: V[] = [];
    function inOrder(node: TreeMapNode<K, V> | null) {
      if (!node) return;
      inOrder(node.left);
      arr.push(node.value);
      inOrder(node.right);
    }
    inOrder(this.root);
    return arr;
  }

  clear() {
    this.root = null;
    this._size = 0;
  }
}
