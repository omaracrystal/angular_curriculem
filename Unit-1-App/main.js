// add scripts
var app = angular.module("myapp", ["ngSanitize"]);

//updating with vanilla javascript
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('[name=vanilla]').addEventListener('input', function (e) {
    document.querySelector('#vanilla').innerHTML = "My name is:<b>" + e.target.value + "</b>"
  });
});

//show pi digits based on dropdown
app.controller('PiDigits', function($scope) {
  $scope.data = {
    digitsOfPi:'2'
  };
});

