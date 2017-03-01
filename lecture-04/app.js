(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('myFirstController', function ($scope){
  $scope.name = 'pratiti';
  $scope.sayHello = function () {
    return "Hello Couresra";
  };
});

})();
