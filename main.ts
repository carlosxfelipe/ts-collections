import {
  ArrayList,
  LinkedList,
  Stack,
  Queue,
  HashSet,
  LinkedHashSet,
  TreeSet,
  HashMap,
  LinkedHashMap,
  TreeMap,
  PriorityQueue,
} from "./src";
import {
  bubbleSort,
  selectionSort,
  insertionSort,
  mergeSort,
  quickSort,
} from "./src/Sort";

// ArrayList
const arrList = new ArrayList<number>();
arrList.add(1);
arrList.add(2);
arrList.add(3);
console.log("ArrayList:", arrList.toArray());

// LinkedList
const linkedList = new LinkedList<string>();
linkedList.add("a");
linkedList.add("b");
linkedList.addFirst("start");
console.log("LinkedList:", linkedList.toArray());

// Stack
const stack = new Stack<number>();
stack.push(10);
stack.push(20);
console.log("Stack pop:", stack.pop());

// Queue
const queue = new Queue<number>();
queue.enqueue(1);
queue.enqueue(2);
console.log("Queue dequeue:", queue.dequeue());

// HashSet
const hashSet = new HashSet<number>();
hashSet.add(5);
hashSet.add(10);
console.log("HashSet has 10:", hashSet.has(10));

// LinkedHashSet
const linkedHashSet = new LinkedHashSet<string>();
linkedHashSet.add("one");
linkedHashSet.add("two");
console.log("LinkedHashSet values:", linkedHashSet.values());

// TreeSet
const treeSet = new TreeSet<number>();
treeSet.add(3);
treeSet.add(1);
treeSet.add(2);
console.log("TreeSet (ordered):", treeSet.toArray());

// HashMap
const hashMap = new HashMap<string, number>();
hashMap.set("a", 1);
hashMap.set("b", 2);
console.log("HashMap entries:", hashMap.entries());

// LinkedHashMap
const linkedHashMap = new LinkedHashMap<string, string>();
linkedHashMap.set("x", "foo");
linkedHashMap.set("y", "bar");
console.log("LinkedHashMap values:", linkedHashMap.values());

// TreeMap
const treeMap = new TreeMap<number, string>();
treeMap.set(2, "dois");
treeMap.set(1, "um");
treeMap.set(3, "tres");
console.log("TreeMap keys (ordered):", treeMap.keys());
console.log("TreeMap values (ordered):", treeMap.values());

// PriorityQueue
const pq = new PriorityQueue<number>();
pq.enqueue(5);
pq.enqueue(1);
pq.enqueue(10);
console.log("PriorityQueue dequeue (min):", pq.dequeue());

// --- Sort algorithms ---

const nums = [4, 2, 7, 1, 3];

console.log("bubbleSort:", bubbleSort(nums));
console.log("selectionSort:", selectionSort(nums));
console.log("insertionSort:", insertionSort(nums));
console.log("mergeSort:", mergeSort(nums));
console.log("quickSort:", quickSort(nums));

// Comparator de strings
const words = ["banana", "apple", "orange"];
console.log(
  "mergeSort strings:",
  mergeSort(words, (a, b) => a.localeCompare(b))
);
