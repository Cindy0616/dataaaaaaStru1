var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods)

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value))

};

treeMethods.contains = function(target) {
  //need to check each
  //using recursion call this function again
  if (this.value === target) {
    return true;
  }
  for (var i = 0; i < this.children.length; i++) {
    var child = this.children[i];
    if (child.contains(target)) {
      return true;
    }
  }
  return false;
  /*
  var result = false;
  var checkChildList = function(node) {
    for (var i = 0; i < node.length; i++) {
      if (node[i].value === target) {
        result = true;
      }
      if (node[i].children.length > 0) {
        checkChildList(node[i].children);
      }
    }
  };
  checkChildList(this.children);
  return result;
  */
};
treeMethods.traverse = function(callback) {
  callback(this.value);

  if (!this.children) { return; }
  for (var i = 0; i < this.children.length; i++) {
    var child = this.children[i];
    child.traverse(callback);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
   add() =====> constant O(1)
   contain() ======> quadratic O(n^2)
 */
