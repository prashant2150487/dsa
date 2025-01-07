class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  add(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let curretNode = this.head;
      while (curretNode.next) {
        curretNode = curretNode.next;
      }
      curretNode.next = newNode;
    }
  }
  addAtBegning(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }
  addAtEnd(value) {
    const newNode = new Node(value);
    if (this.head == null) {
      this.head = newNode;
      return;
    }
    let current = this.head;

    while (current.next != null) {
      current = current.next;
    }
    current.next = newNode;
  }

  lengthOfLinkedList() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    console.log(count, "length of linked list iterative approch");
  }

  insertNodeAfterGivenNode(key, newVal) {
    let curr = this.head;
    let newNode = new Node(newVal);
    while (curr !== null) {
      if (curr.value === key) {
        newNode.next = curr.next;
        curr.next = newNode;
        return;
      }
      curr = curr.next;
    }
  }
  searchNodePresentInLinkedList(data) {
    let curr = this.head;
    while (curr !== null) {
      if (curr.value == data) {
        return true;
      }
      curr = curr.next;
    }
    return false;
  }

  // deletion of node

  deleteFirstNode() {
    if (this.head == null) {
      console.log("List is empty");
      return;
    }
    this.head = this.head.next;
  }
  deleteLatNode() {
    let curr = this.head;
    if (curr == null) {
      return;
    }
    if (curr.next == null) {
      this.head = null;
      return;
    }
    if (curr.next.next == null) {
      this.curr.next = null;
      return;
    }
    while (curr.next.next !== null) {
      curr = curr.next;
    }
    curr.next = null;
  }
  deleteAtSpecificPosition(pos) {
    let curr = this.head;
    let prev = null;
    if (pos == 1) {
      this.head = this.head.next;
    }
    if (pos >= 1) {
      for (let i = 1; i < pos; i++) {
        prev = curr;
        curr = curr.next;
      }
      prev.next = curr.next;
    }
  }

  deleteAtSpecificPosition(pos) {
    let curr = this.head;
    let prev = null;
    let index = 1;
    if (pos == 1) {
      this.head = this.head.next;
      return;
    }

    for (let i = 1; i < pos; i++) {
      prev = curr;
      curr = curr.next;
      console.log(i);
    }
    prev.next = curr.next;
  }

  // deleteEveryKthNode(pos) {
  //   if (this.head == null || pos <= 0) {
  //     return;
  //   }
  //   let count = 1;
  //   let curr = this.head;
  //   let prev = null;
  //   while (curr != null) {
  //     // console.log(count);

  //     if (pos % count == 0) {
  //       console.log(curr.value, "value");
  //       prev.next=curr.next;
  //       prev=curr;
  //       curr=curr.next;
  //       count = 1;

  //     } else {
  //       count++;
  //       prev=curr
  //       curr = curr.next;
  //     }
  //   }
  // }

  findMiddleNodes() {
    // ---------------------first approach --------------------
    // let curr = this.head;
    // let size = 0;
    // while (curr != null) {
    //   size++;
    //   curr = curr.next;
    // }
    // console.log(size, Math.ceil(size / 2));

    // curr = this.head;
    // for (let i = 0; i < Math.floor(size / 2); i++) {
    //   curr = curr.next;
    // }
    // console.log(curr.value, "middle");
    // --------------------------------second approch-------------------
    let slow = this.head;
    let fast = this.head.next;
    while (fast.next !== null) {
      slow = slow.next;
      fast = fast.next;
    }
    console.log(slow.value, "middle");
  }

  print() {
    let output = "";
    let currNode = this.head;
    if (currNode == null) {
      console.log("List is empty");
    }
    while (currNode) {
      output += currNode.value + (currNode.next ? " -> " : "");
      currNode = currNode.next;
    }
    console.log(output);
  }
}

const list = new LinkedList();
// list.add(11);
list.add(23);
list.add(32);
list.add(13);
list.add(25);
list.add(36);
list.print();
// list.addAtBegning(10);
// list.print();
// list.addAtEnd(100);
// list.print();

// list.lengthOfLinkedList();
// list.insertNodeAfterGivenNode(100, 2200);
// list.print();

// console.log(list.searchNodePresentInLinkedList(100));
// list.deleteFirstNode();
// list.print();
// list.deleteLatNode();
// list.print();
// list.deleteAtSpecificPosition(6);
// list.print();
// list.deleteAtSpecificPosition(6);
// list.print();
// list.deleteEveryKthNode(2);
list.findMiddleNodes();
list.print();
