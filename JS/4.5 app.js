var app = angular.module('myApp', []);

app.controller('SimpleController', ['$scope','$filter', function($scope,$filter){

    $scope.pass = '';
    
    $scope.pass1 = '';
    
    $scope.pass2 = '';
    
    $scope.characters = 5;


}]);



