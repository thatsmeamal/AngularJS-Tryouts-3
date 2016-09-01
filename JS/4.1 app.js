var app = angular.module('myApp', []);

app.controller('SimpleController', ['$scope','$timeout', function($scope,$timeout){
        
    $scope.name = 'Amal';
    
    $timeout(function(){
        $scope.name = 'Naruto. Angular is awesome';
    },3000);
}]);


/*
Here, $timeout is a service provided by angular just like the $scope service.

$timeout helps in doing things after a specified amount of time period.

It takes two arguments: first, the function to be performed and second, the time
period in milliseconds.

Hence, as mentioned in the code above, the value of the variable 'name' gets updated
after 3000 milliseconds.
*/