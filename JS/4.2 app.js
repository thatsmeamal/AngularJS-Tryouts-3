var app = angular.module('myApp', []);

app.controller('SimpleController', ['$scope','$filter', function($scope,$filter){

    $scope.name = '';
    
    $scope.changeName = function(){
        return $filter('uppercase')($scope.name);
    };
}]);


