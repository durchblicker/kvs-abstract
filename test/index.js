/*
** © 2013 by Philipp Dunkel <pip@pipobscure.com>. Licensed under MIT-License.
*/
/*jshint node:true, browser:false*/
'use strict';

var Lab = require('lab');
var Joi = require('joi');
var Abstract = require('../');
var kvsA = new Abstract();

Lab.test('set a value', function(done) {
  kvsA.set('test', 'test', function(err) {
    Lab.expect(!err).to.equal(true);
    done();
  });
});
Lab.test('get a value', function(done) {
  kvsA.get('test', function(err, val) {
    Lab.expect(!err).to.equal(true);
    Lab.expect(val).to.equal(null);
    done();
  });
});
Lab.test('list a value', function(done) {
  kvsA.list('test', function(err, val) {
    Lab.expect(!err).to.equal(true);
    Lab.expect(!Joi.validate(val, {
      count:Joi.number().integer(),
      values:Joi.array()
    })).to.equal(true);
    done();
  });
});
Lab.test('remove a value', function(done) {
  kvsA.remove('test', function(err) {
    Lab.expect(!err).to.equal(true);
    done();
  });
});
