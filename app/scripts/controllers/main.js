'use strict';
/**
 * @Author: yordin
 * @Date:   2019-05-30T21:10:41-04:00
 * @Last modified by:   yordin
 * @Last modified time: 2019-06-02T02:24:26-04:00
 */
app.controller("MainCtrl", ["$scope","$location","$routeParams","getResource",function($scope,$location,$routeParams,getResource){

    $scope.searchUsername = "";
    $scope.notFoundUser = false;
    $scope.notFoundRepos = false;
    $scope.notFoundMessage = "";
    $scope.detailsUser = {};
    $scope.detailsUserRepos = {};

    $scope.numPerPage = 2;
    $scope.currentPage = 1;
    $scope.filteredTodos = [];

    $scope.numPages = function () {
        let numPag = Math.ceil($scope.detailsUserRepos.length / $scope.numPerPage);
        console.log(numPag);
        return numPag;
    };

    // $scope.$watch('detailsUserRepos', function() {
    //     pagination();
    // });

    // $scope.$watch('currentPage + numPerPage', function() {
    //     pagination();
    // });
    //
    // var pagination = function() {
    //     var begin = (($scope.currentPage - 1) * $scope.numPerPage);
    //     var end = begin + $scope.numPerPage;
    //     console.log(begin);
    //     console.log(end);
    //     console.log($scope.detailsUserRepos);
    //     if(Object.keys($scope.detailsUserRepos).length > 0){
    //         $scope.filteredTodos = $scope.detailsUserRepos.slice(begin, end);
    //     }
    // }

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
        getResource.get({username:$scope.searchUsername,type:null}).$promise.then(
            function(response){
                if( response.$promise.$$state.status == 1){
                    $scope.detailsUser = response;
                    getRepos();
                } else {
                    $scope.notFoundUser = true;
                }
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

    var orderRepos = function() {
        $scope.detailsUserRepos.sort(function (a, b){
            return (b.stargazers_count - a.stargazers_count)
        });
    }

    if( !angular.isUndefined($routeParams.username) ){
        $scope.searchUsername = $routeParams.username;
        getUser();
    }

}]);
