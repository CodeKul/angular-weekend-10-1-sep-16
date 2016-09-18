angular.module('MyApp',['myLog','ProvideRegisterService'])
.run(['$rootScope',function(rs){
  rs.myDate = new Date();
}])
.controller('MyController',['myFactory',function MyController(myFac){
  var my = this;

  my.call = function(){
    my.myName = myFac.myVal;
  };
}])
.controller('MyOtherController',['$rootScope','$scope','logger','myFactory',function MyOtherController(rs,scp,log,myFac){
    scp.myName = 'Barack Obama';
    scp.changeMyName = function() {
      scp.myName = 'Narendra Modi'+ new Date();
      log.i('My Name - '+scp.myName);
      log.e('My Name - '+scp.myName);
      log.i('Root Scp - '+rs.myDate);
      myFac.myVal = 'MOC'+ new Date();
    };

    scp.$watch('myName',function(nv,ov){
        log.i('Nv - '+nv+' Ov - '+ov);
    });
    scp.myName = 'Android';
}])
.controller('OuterController',['$scope','myFactory',function (scp,myFac){
  scp.name = 'Outer Name'
}])
.controller('InnerController',['$scope',function (scp){
  //scp.name = 'Inner Name';
  scp.mobile='9762548833';
}]);
