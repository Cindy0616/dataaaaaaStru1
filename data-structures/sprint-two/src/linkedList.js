var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = new Node(value);
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    if (list.head !== null) {
      var removeHead = list.head;
      list.head = list.head.next;
      return removeHead.value;
    }else {
      return null;
    }
  };

  list.contains = function(target) {
    //using a function to find the object that contain target value
    while(list.head) {
      if (list.head.value === target) {
        return true;
      }
      list.head = list.head.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
  addTail() =====> constant O(1)
  removeHead() ======> constant O(1)
  contains() ======> linear O(n);
 */
