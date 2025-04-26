export type Comparator<T> = (a: T, b: T) => number;

// Bubble Sort
export function bubbleSort<T>(arr: T[], compare?: Comparator<T>): T[] {
  const a = [...arr];
  const cmp = compare ?? ((x, y) => (x as any) - (y as any));
  for (let i = 0; i < a.length - 1; i++) {
    for (let j = 0; j < a.length - i - 1; j++) {
      if (cmp(a[j], a[j + 1]) > 0) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
      }
    }
  }
  return a;
}

// Selection Sort
export function selectionSort<T>(arr: T[], compare?: Comparator<T>): T[] {
  const a = [...arr];
  const cmp = compare ?? ((x, y) => (x as any) - (y as any));
  for (let i = 0; i < a.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < a.length; j++) {
      if (cmp(a[j], a[min]) < 0) min = j;
    }
    if (min !== i) [a[i], a[min]] = [a[min], a[i]];
  }
  return a;
}

// Insertion Sort
export function insertionSort<T>(arr: T[], compare?: Comparator<T>): T[] {
  const a = [...arr];
  const cmp = compare ?? ((x, y) => (x as any) - (y as any));
  for (let i = 1; i < a.length; i++) {
    let j = i;
    const temp = a[i];
    while (j > 0 && cmp(temp, a[j - 1]) < 0) {
      a[j] = a[j - 1];
      j--;
    }
    a[j] = temp;
  }
  return a;
}

// Merge Sort
export function mergeSort<T>(arr: T[], compare?: Comparator<T>): T[] {
  const cmp = compare ?? ((x, y) => (x as any) - (y as any));
  if (arr.length <= 1) return arr.slice();

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid), cmp);
  const right = mergeSort(arr.slice(mid), cmp);

  const merged: T[] = [];
  let i = 0,
    j = 0;
  while (i < left.length && j < right.length) {
    if (cmp(left[i], right[j]) <= 0) merged.push(left[i++]);
    else merged.push(right[j++]);
  }
  return merged.concat(left.slice(i)).concat(right.slice(j));
}

// Quick Sort
export function quickSort<T>(arr: T[], compare?: Comparator<T>): T[] {
  const a = [...arr];
  const cmp = compare ?? ((x, y) => (x as any) - (y as any));
  function qs(start: number, end: number) {
    if (start >= end) return;
    const pivot = a[end];
    let i = start;
    for (let j = start; j < end; j++) {
      if (cmp(a[j], pivot) < 0) {
        [a[i], a[j]] = [a[j], a[i]];
        i++;
      }
    }
    [a[i], a[end]] = [a[end], a[i]];
    qs(start, i - 1);
    qs(i + 1, end);
  }
  qs(0, a.length - 1);
  return a;
}
