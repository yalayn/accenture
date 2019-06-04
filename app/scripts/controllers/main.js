'use strict';
/**
 * @Author: yordin
 * @Date:   2019-05-30T21:10:41-04:00
 * @Last modified by:   yordin
 * @Last modified time: 2019-06-04T00:56:26-04:00
 */
app.controller("MainCtrl", ["$scope","$location","$routeParams","getResource",function($scope,$location,$routeParams,getResource){

    $scope.searchUsername = "";
    $scope.notFoundUser = false;
    $scope.notFoundRepos = false;
    $scope.notFoundMessage = "";
    $scope.detailsUser = {};
    $scope.detailsUserRepos = {};

    /**
     * [Redirect to view with user information]
     */
    $scope.searchAction = function() {
        $location.path("/search/"+$scope.searchUsername);
    }

    /**
     * [get the user information]
     */
    var getUser = function(){
        $scope.detailsUser = {};
        $scope.notFoundMessage = "User not found :(";
        $scope.notFoundUser = false;
        getResource.get({username:$scope.searchUsername,type:null}).$promise.then(
            function(response){
                $scope.detailsUser = response;
                getRepos();
            },
            function(error){
                $scope.notFoundUser = true;
            }
        );
    }

    /**
     * [get the user repositories]
     */
    var getRepos = function(){
        $scope.detailsUserRepos = {};
        $scope.notFoundMessage = "User repositories not found :(";
        $scope.notFoundUser = false;
        getResource.query({username:$scope.searchUsername,type:"repos"}).$promise.then(
            function(response){
                $scope.detailsUserRepos = response;
                orderRepos();
            },
            function(error){
                $scope.notFoundRepos = true;
            }
        );
    };

    /**
     * [order repos for start]
     */
    var orderRepos = function() {
        $scope.detailsUserRepos.sort(function (a, b){
            return (b.stargazers_count - a.stargazers_count)
        });
    }

    if( !angular.isUndefined($routeParams) ){
    	if( !angular.isUndefined($routeParams.username) ){
		$scope.searchUsername = $routeParams.username;
		getUser();
        }
    }

}]);
