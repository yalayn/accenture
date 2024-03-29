/**
 * @Author: yordin
 * @Date:   2019-05-30T21:10:41-04:00
 * @Last modified by:   yordin
 * @Last modified time: 2019-06-04T00:59:18-04:00
 */
app.directive('formSearch', [function() {
    return {
        templateUrl:'app/views/formSearch.html'
    };
}]);

app.directive('notFoundData', [function() {
    return {
        restrict: 'E',
        template:'<div class="not-found-message">{{notFoundMessage}}</div>'
    };
}]);

app.component('labelSearch', {
    template:'<a href="#!/" ><label for="search_username" class="github-search">Github <span class="text-style-1">Search</span</label></a>'
});
