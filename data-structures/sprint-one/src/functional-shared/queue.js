var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  _.extend(instance, queueMethods);
  instance._storage = {};
  instance._start = 0;
  instance._end = 0;
  return instance;
};

var queueMethods = {};
queueMethods.enqueue = function(string) {
  this._storage[this._end] = string;
  this._end++;
}
queueMethods.dequeue = function() {
  var result = this._storage[this._start];
  if (this.size()) {
    delete this._storage[this._start];
    this._start++;
  }
  return result;
}
queueMethods.size = function() {
  return this._end - this._start;
}
