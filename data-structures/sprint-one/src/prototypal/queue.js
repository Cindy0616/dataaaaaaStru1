var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance._storage = {};
  instance._start = 0;
  instance._end = 0;
  return instance;
};
var queueMethods = {};
queueMethods.enqueue = function(value) {
  this._storage[this._end] = value;
  this._end++;
};
queueMethods.dequeue = function() {
  var result = this._storage[this._start];
  delete this._storage[this._start];
  this.size() && this._start++;
  return result;
};
queueMethods.size = function() {
  return this._end - this._start;
};





