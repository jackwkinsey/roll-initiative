class Queue {
  constructor(initialElements = []) {
    this.elements = initialElements;
  }

  add(element) {
    this.elements.push(element);
  }

  remove() {
    return this.elements.shift();
  }

  moveFirstToBack() {
    this.add(this.remove());
  }
}

export default Queue;
