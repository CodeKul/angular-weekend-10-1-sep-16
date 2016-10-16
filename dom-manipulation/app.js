(function(){
  'use strict'

  angular.module('MyApp', [])
  .controller('MyController',['$scope',function(scp){

  }])
  .directive('myDir',[function(){
      return {
        link : function(scope,element,attr){
          element.css({
             position: 'relative',
             border: '1px solid red',
             backgroundColor: 'lightgrey',
             cursor: 'pointer'
           });
          var btnOkay = element.append('<input id="myBtn" type="button" value="okay"/>');
          var els = element.find('input');
          els.on('click',function(event){
              var input = element.append('<input type="input"/>');
          });
        }
      };
  }]);
})(window.angular);
