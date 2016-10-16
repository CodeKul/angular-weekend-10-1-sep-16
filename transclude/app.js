(function(angular){
  'use strict'

  angular.module('MyApp', [])
  .controller('MyController',['$scope',function(scp){

  }])
  .directive('myDir',[function () {
    return {
      restrict : 'E',
      templateUrl : 'my-dir.html',
      transclude : true
    };
  }]);
})(window.angular);
