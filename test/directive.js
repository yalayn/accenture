/**
 * @Author: yordin
 * @Date:   2019-06-03T21:41:02-04:00
 * @Last modified by:   yordin
 * @Last modified time: 2019-06-04T14:11:46-04:00
 */

describe('notFoundData', function() {

  let element, scope;
  beforeEach(function() {
    module('app');
    inject(function($compile, $rootScope, $httpBackend) {
      $httpBackend.whenGET('app/views/main.html').respond("some html");
      scope = $rootScope.$new();
      scope.notFoundUser = true;
      element = angular.element('<not-found-data></not-found-data>');
      $compile(element)(scope);
      scope.$apply();
    })
  });

  it('Should injected in the directive notFoundData', function() {
      expect(element.html()).toContain('<div class="not-found-message ng-binding"></div>');
  });


});

describe('labelSearch', function() {

  let element, scope;
  beforeEach(function() {
    module('app');
    inject(function($compile, $rootScope, $httpBackend) {
      $httpBackend.whenGET('app/views/main.html').respond("some html");
      scope = $rootScope.$new();
      scope.notFoundUser = true;
      element = angular.element('<label-search></label-search>');
      $compile(element)(scope);
      scope.$apply();
    })
  });

  it('Should injected in the directive labelSearcah', function() {
      expect(element.html()).toContain('<a href="#!/"><label for="search_username" class="github-search">Github <span class="text-style-1">Search</span></label></a>');
  });


});
