(function() {
  var PubSub, root,
    __slice = Array.prototype.slice;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  PubSub = (function() {
    var cache, publish, subscribe;
    cache = {};
    publish = function() {
      var args, callback, topic, _i, _len, _ref, _results;
      topic = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if (!cache[topic]) return;
      _ref = cache[topic];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        callback = _ref[_i];
        _results.push(callback.apply(root, args));
      }
      return _results;
    };
    subscribe = function(topic, callback) {
      if (!cache[topic]) cache[topic] = [];
      cache[topic].push(callback);
      return [topic, callback];
    };
    return {
      pub: publish,
      sub: subscribe
    };
  })();

  root.PubSub = PubSub;

}).call(this);
