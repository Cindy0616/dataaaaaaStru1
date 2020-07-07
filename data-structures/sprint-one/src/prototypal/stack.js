var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);
  instance._storage = {};
  instance._size = 0;
  return instance;
};

var stackMethods = {};
stackMethods.push = function(string) {
  this._storage[this._size] = string;
  this._size++;
}
stackMethods.pop = function() {
  this._size && this._size--;
  var result = this._storage[this._size];
  delete this._storage[this._size];
  return result;
}
stackMethods.size = function() {
  return this._size;
}


