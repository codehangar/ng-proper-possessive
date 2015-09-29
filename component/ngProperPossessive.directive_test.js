'use strict';

describe('properPossessive module', function () {
  beforeEach(module('properPossessive'));

  describe('properPossessive directive', function () {
    it('should print a noun/name ending in s followed by only an apostrophy', function () {
      inject(function ($compile, $rootScope) {
        var element = $compile('<span proper-possessive name="Jess"></span>')($rootScope);
        expect(element.text()).toEqual("Jess'");
      });
    });
  });
  describe('properPossessive directive', function () {
    it('should print a noun/name not ending in S followed by an apostrophy s', function () {
      inject(function ($compile, $rootScope) {
        var element = $compile('<span proper-possessive name="Bill"></span>')($rootScope);
        expect(element.text()).toEqual("Bill's");
      });
    });
  });
});
