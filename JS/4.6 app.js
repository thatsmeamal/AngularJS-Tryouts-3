var app = angular.module('myApp', []);

app.controller('SimpleController', ['$scope','$http', function($scope,$http){

    $scope.pass = '';
    
    $scope.abc = false;
    
    $scope.characters = 5;
    
    $http.get('rules.json').success(function(result){
          $scope.rules = result;

    });
    
    $scope.newrule = '';
    $scope.addRule = function(){
          $http.post('rules.json', {rulename : $scope.newrule}).success(function(result){
               $scope.rules = result;
               $scope.abc = true;
               console.log("sdf");
          });
    };
}]);



