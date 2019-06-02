/**
 * @Author: yordin
 * @Date:   2019-05-30T11:05:33-04:00
 * @Last modified by:   yordin
 * @Last modified time: 2019-06-01T21:45:03-04:00
 */

 //PROMISE CON ngResource
 app.factory("getResource", ["$resource",function($resource){
     "https://api.github.com/users/{username}/{type}"
     return $resource("https://api.github.com/users/:username/:type",{username:"@username",type:"@type"});
 }]);
