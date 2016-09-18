var module = angular.module('MyService', []);
module.factory('MyFactory', ['$log',function(log){
  return {
    hi : function(){
      log.info('Hello How R U ?');
    }
  };
}]);

var injector = angular.injector(['ng','MyService']);
var myFac = injector.get('MyFactory');
myFac.hi();
