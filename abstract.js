/*
** © 2013 by Philipp Dunkel <pip@pipobscure.com>. Licensed under MIT-License.
*/
/*jshint node:true, browser:false*/
'use strict';

module.exports = Abstract;
module.exports.bequeath = bequeath;
module.exports.instantiate = instantiate;

var util = require('util');
var once = require('once');

function Abstract() {
  Object.defineProperty(this, 'get', { value:get, enumerable:true });
  Object.defineProperty(this, 'set', { value:set, enumerable:true });
  Object.defineProperty(this, 'remove', { value:remove, enumerable:true });
  Object.defineProperty(this, 'list', { value:list, enumerable:true });
}

function bequeath(Child) {
  util.inherits(Child, Abstract);
}
function instantiate(child) {
  Abstract.call(child);
}

function get(name, callback) {
  /*jshint validthis:true*/
  if ('function' !== typeof callback) callback=function() {};
  return this._get(name, once(callback.bind(this)));
}

function set(name, value, callback) {
  /*jshint validthis:true*/
  if ('function' !== typeof callback) callback=function() {};
  return this._set(name, value, once(callback.bind(this)));
}

function remove(name, callback) {
  /*jshint validthis:true*/
  if ('function' !== typeof callback) callback=function() {};
  return this._remove(name, once(callback.bind(this)));
}

function list(name, callback) {
  /*jshint validthis:true*/
  if ('function' !== typeof callback) callback=function() {};
  return this._list(name, once(callback.bind(this)));
}

Abstract.prototype._get = function(name, callback) {
  setImmediate(callback.bind(this, null, null));
};

Abstract.prototype._set = function(name, value, callback) {
  setImmediate(callback.bind(this, null));
};

Abstract.prototype._remove = function(name, callback) {
  setImmediate(callback.bind(this, null));
};

Abstract.prototype._list = function(name, callback) {
  setImmediate(callback.bind(this, null, { count:0, values:[] }));
};
