// data-structures.js

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    // Insert element at the end of the list
    add(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
      this.size++;
    }
  
    // Remove element at given index
    removeAt(index) {
      if (index < 0 || index >= this.size) {
        return null;
      }
      let current = this.head;
      let previous = null;
      if (index === 0) {
        this.head = current.next;
      } else {
        for (let i = 0; i < index; i++) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
      this.size--;
      return current.data;
    }
  
    // Get element at given index
    get(index) {
      if (index < 0 || index >= this.size) {
        return null;
      }
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
      return current.data;
    }
  
    // Get the size of the list
    getSize() {
      return this.size;
    }
  }
  
  class Stack {
    constructor() {
      this.items = [];
    }
  
    // Add element to the top of the stack
    push(data) {
      this.items.push(data);
    }
  
    // Remove and return element from the top of the stack
    pop() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items.pop();
    }
  
    // Return element from the top of the stack without removing it
    peek() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items[this.items.length - 1];
    }
  
    // Check if the stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Get the size of the stack
    getSize() {
      return this.items.length;
    }
  }
  
  class Queue {
    constructor() {
      this.items = [];
    }
  
    // Add element to the back of the queue
    enqueue(data) {
      this.items.push(data);
    }
  
    // Remove and return element from the front of the queue
    dequeue() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items.shift();
    }
  
    // Return element from the front of the queue without removing it
    front() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items[0];
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Get the size of the queue
    getSize() {
      return this.items.length;
    }
  }
  
  // Exporting data structures
  module.exports = {
    LinkedList,
    Stack,
    Queue
  };
  