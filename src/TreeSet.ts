type Comparator<T> = (a: T, b: T) => number;

class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

export class TreeSet<T> {
  private root: TreeNode<T> | null = null;
  private compare: Comparator<T>;
  private _size = 0;

  constructor(compareFn?: Comparator<T>) {
    this.compare = compareFn ?? ((a, b) => (a as any) - (b as any));
  }

  add(value: T): boolean {
    if (!this.root) {
      this.root = new TreeNode(value);
      this._size++;
      return true;
    }
    let node = this.root;
    while (true) {
      const cmp = this.compare(value, node.value);
      if (cmp === 0) return false; // já existe
      if (cmp < 0) {
        if (!node.left) {
          node.left = new TreeNode(value);
          this._size++;
          return true;
        }
        node = node.left;
      } else {
        if (!node.right) {
          node.right = new TreeNode(value);
          this._size++;
          return true;
        }
        node = node.right;
      }
    }
  }

  has(value: T): boolean {
    let node = this.root;
    while (node) {
      const cmp = this.compare(value, node.value);
      if (cmp === 0) return true;
      node = cmp < 0 ? node.left : node.right;
    }
    return false;
  }

  size(): number {
    return this._size;
  }

  toArray(): T[] {
    const arr: T[] = [];
    function inOrder(node: TreeNode<T> | null) {
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
