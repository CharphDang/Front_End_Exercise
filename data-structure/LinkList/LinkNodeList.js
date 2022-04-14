class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

class LinkNodeList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(val) {
    const node = new Node(val);
    if (this.head) {
      let p = this.head;
      while (p.next) {
        p = p.next;
      }
      p.next = node;
    } else {
      this.head = node;
    }
    this.length++;
  }

  print() {
    if (this.head) {
      let p = this.head;
      let str = p.data;
      // 先执行一次，再判断p.next是否
      // do {
      //   str += p.data + '=>';
      //   p = p.next ? p.next : p;
      // } while (p.next);
      // str += p.data;
      while (p.next) {
        str += '=>' + p.next.data;
        p = p.next;
      }
      console.log(str); // Charph-log
    } else {
      console.log('empty');
    }
  }
}

const nodeList = new LinkNodeList();
nodeList.append(1);
// nodeList.append(2);
// nodeList.append(3);
// nodeList.append(4);
console.log(nodeList.length, 'length'); // Charph-log
nodeList.print();
