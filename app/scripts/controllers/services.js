/**
 * @Author: yordin
 * @Date:   2019-05-30T11:05:33-04:00
 * @Last modified by:   yordin
 * @Last modified time: 2019-06-02T18:17:04-04:00
 */

 /**
  * [Factory responsible for managing the resources of the API.]
  */
 app.factory("getResource", ["$resource",function($resource){
     "https://api.github.com/users/{username}/{type}"
     return $resource("https://api.github.com/users/:username/:type",{username:"@username",type:"@type"});
 }]);
