'use strict';

var expect = require('chai').expect;
var numAdditionar = require('../index');

describe('#numAdditionar', function () {
    it('should add integer numbers', function () {
        var result = numAdditionar(10, 20);
        expect(result).to.equal(30);
    });
    it('should add numeric numbers', function () {
        var result = numAdditionar(10.5, 20.5);
        expect(result).to.equal(31);
    });
});