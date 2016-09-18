
var SimpleController = function(scp,log){
  scp.simple = 'Android';
};

SimpleController.$inject = ['$scope','$log'];

angular.module('MyApp', [])
.controller('MyController',['$scope',function(scp){
  scp.cnt = 0;
  scp.$on('MyEvent',function(){
    scp.cnt++;
  });
}])
.controller('MyOtherController',['$scope','$interval','$log',function(scp,interval,log){
  scp.status=true;

  interval(function(){
    scp.status = false;
    log.info('Fired');
  },10000,1);

  scp.$on('MyEvent',function(){
    scp.cnt++;
  });
}])
.controller('SimpleController',SimpleController)
.controller('AgainSimpleController', function($scope,$log){
  $scope.againSimple = 'Again Simple';

  $scope.cities = ['Pune','Mumbai','Kolhapur','Banglore'];

  $scope.getIndex = function(){return parseInt((Math.random() * $scope.cities.length))};

  $scope.myEvent = function(ev){
    $scope.ev = ev;
  };

  $scope.changeCity = function(){
    $scope.index = $scope.getIndex() - 1;
  }
})
.controller('InterController',['$scope',function(scp){
  scp.images = ['a','b'];

  scp.image = scp.images[1]+'.jpg';
}]);

eval('alert(myData);')
