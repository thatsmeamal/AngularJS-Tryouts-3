var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
            .when('/first', {
                templateUrl : '5.3. routingfirst.html',
                controller : 'SimpleController'
            })
            
            .when('/second', {
                templateUrl : '5.3. routingsecond.html',
                controller: 'SecondController'
            })   
});

/*
The two pages are linked with different controllers 
*/

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