angular.module('ProvideRegisterService', [])
.config(['$provide',function(provide){
  provide.factory('myFactory',[function(){
    return {
      myVal : 'android'
    };
  }]);
}]);
