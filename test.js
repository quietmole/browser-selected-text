'use strict';
var assert = require('power-assert');
var createLinkPlain = require('./');
var startsWith = require('lodash.startswith');

it('should be title and url', function () {
  assert(startsWith(createLinkPlain(), 'Test\'em http://localhost:'));
});
