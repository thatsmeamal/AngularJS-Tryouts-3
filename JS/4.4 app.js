var app = angular.module('myApp', []);

app.controller('SimpleController', ['$scope','$filter', function($scope,$filter){

    $scope.name = '';
    
    $scope.changeName = function(){
        return $filter('uppercase')($scope.name);
    };
    
/*
For every variable that is used for two-way data binding, like the variable 'name'
here, the angularjs creates a set of watchers for detecting changes occuring to the 
variable whenever an event happens. This is done through a Digest loop.

Watchers automatically check for the changes on any event that happens through the 
digest loop and make the required changes in the respective DOM elements.

To simulate the above, we have coded our own watch list, showing us the changes 
happening through the digest loop.
*/
    $scope.$watch('name', function(newValue, oldValue){     //in-built arguments
        console.info('Value Change !!!');
        console.log('Old Value: '+oldValue);
        console.log('New Value: '+newValue);
    });

/*
Watchers and Digest loop work only inside the AngularJS context.
That is, if new code thread such as javascript code or jquery is used to
manipulates the ng-model variable, then the watcher and digest loop does not pick
up the changes and hence, the new values are not updated in the DOM elements.
        
Hence, for the code below, the changes are not picked up by the watchers, since, it 
is a  new thread of code.
*/    
    setTimeout(function(){
        $scope.name = 'Sasuke';
        console.log('Name change !!!');
    },3000);


/*
For cases like above, we need to explicitly tell the watchers to look for any 
cahnges that may happen to the binding variable.

This can be done using the directive $apply:
*/

    setTimeout(function(){
        $scope.$apply(function(){
            $scope.name = 'Sasuke';
            console.log('Name change occured!!!');
        });
    },5000);

}]);



