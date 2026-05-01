// max heap implementation.
class MaxHeap {
  constructor(size) {
    this.maxsize = size;
    this.size = 0;
    this.heap = new Array(this.maxsize + 1).fill(0);
    this.heap[0] = Number.MAX_VALUE;
  }

  parent(index) {
    return Math.floor(index / 2);
  }

  leftChild(index) {
    return 2 * index;
  }

  rightChild(index) {
    return 2 * index + 1;
  }

  swap(firstIndex, secondIndex) {
    const temp = this.heap[firstIndex];
    this.heap[firstIndex] = this.heap[secondIndex];
    this.heap[secondIndex] = temp;
  }

  downHeapify(index) {
    if (index >= this.size / 2 && index <= this.size) {
      return;
    }

    const leftIndex = this.leftChild(index);
    const rightIndex = this.rightChild(index);

    if (
      this.heap[index] < this.heap[leftIndex] ||
      this.heap[index] < this.heap[rightIndex]
    ) {
      if (this.heap[leftIndex] > this.heap[rightIndex]) {
        this.swap(index, leftIndex);
        this.downHeapify(leftIndex);
      } else {
        this.swap(index, rightIndex);
        this.downHeapify(rightIndex);
      }
    }
  }

  upHeapify(index) {
    const temp = this.heap[index];

    while (index > 0 && temp > this.heap[this.parent(index)]) {
      this.heap[index] = this.heap[this.parent(index)];
      index = this.parent(index);
    }

    this.heap[index] = temp;
  }

  insert(element) {
    this.size++;
    this.heap[this.size] = element;
    this.upHeapify(this.size);
  }

  extractMax() {
    const max = this.heap[1];
    this.heap[1] = this.heap[this.size];
    this.size--;
    this.downHeapify(1);
    return max;
  }
}
// const h = new MaxHeap(10); 
// h.insert(50); 
// console.log(h.extractMax());

// min heap implementation.
class MinHeap {
  constructor() {
    this.heap = [];
  }

  parent(index) {
    return Math.floor((index - 1) / 2);
  }

  leftChild(index) {
    return 2 * index + 1;
  }

  rightChild(index) {
    return 2 * index + 2;
  }

  swap(index1, index2) {
    const temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }

  heapifyUp(index) {
    let currentIndex = index;

    while (
      currentIndex > 0 &&
      this.heap[currentIndex] < this.heap[this.parent(currentIndex)]
    ) {
      this.swap(currentIndex, this.parent(currentIndex));
      currentIndex = this.parent(currentIndex);
    }
  }

  heapifyDown(index) {
    let currentIndex = index;
    const leftIndex = this.leftChild(currentIndex);
    const rightIndex = this.rightChild(currentIndex);
    let smallest = currentIndex;

    if (
      leftIndex < this.heap.length &&
      this.heap[leftIndex] < this.heap[smallest]
    ) {
      smallest = leftIndex;
    }

    if (
      rightIndex < this.heap.length &&
      this.heap[rightIndex] < this.heap[smallest]
    ) {
      smallest = rightIndex;
    }

    if (smallest !== currentIndex) {
      this.swap(currentIndex, smallest);
      this.heapifyDown(smallest);
    }
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  getMin() {
    return this.heap[0];
  }

  extractMin() {
    if (this.heap.length === 0) {
      return null;
    }

    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return root;
  }
}
