var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
            .when('/first', {
                templateUrl : '6.2. customfirst.html',
                controller : 'SimpleController'
            })
            
            .when('/second', {
                templateUrl : '6.2. customsecond.html',
                controller: 'SecondController'
            })   
});

/*
The two pages are linked with different controllers 
*/

app.controller('SimpleController', ['$scope','nameService', function($scope,nameService){
        
    $scope.name = nameService.name;

/*What we do below is that, we create our own watchlist for the variable 'name'.

When there is a change (when we type in the textbox) to the value of 'name', the 'name' variable of the service
'nameService' is updated by that value.

*/

    $scope.$watch('name', function() {
        nameService.name = $scope.name;
    });

}]);

//Both the name variables of $scope get the value 'Amal', since the service 'nameService' is a singleton.

app.controller('SecondController', ['$scope','nameService', function($scope,nameService){
    
    $scope.name = nameService.name;           

//Now, the changes made to the textbox in the second page will get reflected in the first page as well.

    $scope.$watch('name', function() {
        nameService.name = $scope.name;
    });  

}]);

app.service('nameService', function(){
    var nS = this;
    this.name = 'Amal';

    this.nameLength = function(){
        return nS.name.length;          //Here, we can't use the 'this' keyboard, since it mentions the nameLength function and not the nameService.
    };
});


/*
Here, a custom service 'nameService' has been defined. Like all the in-built services (except $scope), it too act as a
Singleton.

To use the custom service in a controller, just inject into the controller, like we do with the in-built services.

With the services such as this, we can maintain the value of the variable even if we traverse through multiple pages. 
*/