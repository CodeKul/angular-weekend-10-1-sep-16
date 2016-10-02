angular.module('myFilter', ['myFactory'])
.filter('my',[function(){
  return function(rawData,query){
    var data = [];
    angular.forEach(rawData, function(item) {
      if(item.os.includes(query) ||
          item.product.includes(query)) {
        data.push(item);
      }
    });
    return data;
  };
}])
.filter('myStateful',['simpleFactory',function(simple){
  this.$stateful = true;
  return function(rawData){
    var data = [];
    angular.forEach(rawData, function(item){
        if(item.os.charAt(0).toLowerCase() == simple.char) {
          data.push(item);
        }
    });
    return data;
  };
}]);
