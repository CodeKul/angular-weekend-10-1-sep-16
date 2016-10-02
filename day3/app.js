angular.module('MyApp', ['myFilter'])
.controller('MyController',['filterFilter',function (xyz) {
  var my = this;

  my.rawData = [
    {os : 'Apple',product : 'america'},
    {os : 'Symbian', product : 'japan'},
    {os : 'Rim', product : 'america'},
    {os : 'Windows', product : 'tokiyo'},
    {os : 'Bada',product : 'america'},
    {os : 'Ubuntu',product : 'japan'}
  ];
  my.filteredData  = xyz(my.rawData,my.query);
}]);
