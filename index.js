// Generated by CoffeeScript 1.7.1
(function() {
  'use strict';
  var Emitter, emit, onevent;

  Emitter = require('events').EventEmitter;

  emit = Emitter.prototype.emit;

  onevent = function(packet) {
    var args;
    args = packet.data || [];
    if (packet.id != null) {
      args.push(this.ack(packet.id));
    }
    emit.call(this, '*', packet);
    return emit.apply(this, args);
  };

  module.exports = function() {
    return function(socket, next) {
      if (socket.onevent !== onevent) {
        socket.onevent = onevent;
      }
      return next();
    };
  };

}).call(this);
