var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
            .when('/', {
                templateUrl : '5.3. routingfirst.html',
                controller : 'SimpleController'
            })
            
            .when('/second', {
                templateUrl : '5.3. routingsecond.html',
                controller: 'SecondController'
            })
            
            .when('/second/:num', {
                templateUrl : '5.4. route.html',
                controller: 'SecondController'
            }) 
});

/*
The two pages are linked with different controllers 
*/

app.controller('SimpleController', ['$scope', function($scope){
        
    $scope.name = 'Amal';

}]);

app.controller('SecondController', ['$scope','$routeParams', function($scope,$routeParams){
        
    $scope.name = 'Naruto';
    $scope.character = $routeParams.num || 1;
/*
$routeParams is a service made available by the ngRoute module.
        
$routeParams.num will get the value typed after '/second/'(See line-15) in the address bar.
This value is assigned to the $scope variable 'character';
        
If $routeParams is null(when the other routes are selected), $scope variable 'character'
gets the value 1.
*/
}]);


/*
Here, two controllers are defined. Each of them is injected with a $scope service.

But, each of them have a separate and new versions of scope. Hence, even though, we
have used the same variable 'name' in both the controllers, it does not get overwritten.
*/