angular.module('myLog', [])
.factory('logger',['$log',function(lg){
    return {
      i : function(msg){
        lg.info(msg);
      },
      d : function(msg){
        lg.debug(msg);
      },
      e : function(msg){
        lg.error(msg);
      }
    };
}]);
