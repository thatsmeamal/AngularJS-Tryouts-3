var app = angular.module('myApp', []);

app.controller('SimpleController', ['$scope', function($scope){
        
    $scope.name = 'Amal';
    
}]);

app.controller('SecondController', ['$scope', function($scope){
        
    $scope.name = 'Naruto';
    

}]);


/*
Here, two controllers are defined. Each of them is injected with a $scope service.

But, each of them have a separate and new versions of scope. Hence, even though, we
have used the same variable 'name' in both the controllers, it does not get overwritten.
*/