# Data Structures Package

This package provides implementations of common data structures in JavaScript. Currently, it includes implementations of the following data structures:

- Linked List
- Stack
- Queue

## Installation

You can install this package via npm:

```bash
npm install @your-username/data-structures
```

## Usage

```javascript
// Import the data structures
const { LinkedList, Stack, Queue } = require('@your-username/data-structures');

// Example usage of Linked List
const linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
console.log(linkedList.getSize()); // Output: 3

// Example usage of Stack
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop()); // Output: 3

// Example usage of Queue
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // Output: 1
```

## Contributing

Contributions are welcome! If you have any ideas for improvements or new features, feel free to open an issue or submit a pull request.

## License

This package is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
