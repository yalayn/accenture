/**
 * @Author: yordin
 * @Date:   2019-06-02T23:18:44-04:00
 * @Last modified by:   yordin
 * @Last modified time: 2019-06-03T23:44:48-04:00
 */

 describe('myController', function() {
    var $scope
        ,$location
        ,$routeParams
        ,getResource
        ,services
        ,myPromise
        ,PROMISE = { resolve: true, reject: false }
    ;
    beforeEach(function() {
        module('app');
        inject(function($controller, $rootScope, _$q_, _getResource_) {
            $q = _$q_;
            getResource = _getResource_;
            myPromise = $q.defer();
            $scope = $rootScope.$new();
            $controller('MainCtrl', {
                "$scope": $scope,
                "$location":$location,
                "$routeParams":$routeParams,
                "getResource":getResource
            });
        });
    });

    function isPromise(getResource, method, resolve){
        spyOn(getResource,method).and.returnValue(myPromise.promise);
    }

    it('Should return defined variables', function() {
        expect($scope.detailsUser).toBeDefined();
        expect($scope.detailsUserRepos).toBeDefined();
    });

    it('Should return a promise get resolve', function() {
        isPromise(getResource, 'get',PROMISE.resolve);
    });

    it('Should return a promise get reject', function() {
        isPromise(getResource, 'get',PROMISE.reject);
    });

    it('Should return a promise query resolve', function() {
        isPromise(getResource, 'query',PROMISE.resolve);
    });

    it('Should return a promise query reject', function() {
        isPromise(getResource, 'query',PROMISE.reject);
    });


 });
