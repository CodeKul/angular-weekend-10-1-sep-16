angular.module('MyApp', [])
.controller('MyController',['$scope',function(scp){
  scp.myName = 'CodeKul';
  scp.phoneObj = {
    os : 'aaaa', ver: 'bbbb'
  };
  scp.android = {
    os: 'android',
    ver : '4.4'
  };
  scp.apple = {
    os: 'iOS',
    ver : '7'
  };
  scp.myExp = function(val){
    console.log('OS - ' + val.os);
    console.log('Ver - ' + val.ver);
    scp.phoneObj = val;
  };
}])
/*.controller('OtherController',['$scope',function(scp){
  scp.phone = {
    os: 'iOS',
    ver : '7'
  };
}])*/
.directive('myDir',[function(){
  return {
    templateUrl : 'my-dir.html',
    scope :{
      phone : '=',
      name : '@',
      exp : '&'
    }
  };
}]);
