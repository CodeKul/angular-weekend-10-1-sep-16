(function(angular){
    'use strict'

    angular.module('MyApp', [])
    .directive ('firstDir',[function(){
      return {
        controller : function($scope){
          var first = this;
          this.emitMsg = function(){
            $scope.$emit('myChanel',first.myData);
          };
        },
        controllerAs : 'first'
      };
    }])
    .directive('secondDir',[function(){
      return {
        controller : function ($scope) {
          var second = this;
          $scope.$on('myChanel',function(ev, data){
            second.newData = data;
          });
        },
        controllerAs : 'second'
      };
    }]);
})(window.angular);
