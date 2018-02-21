var myNinjaApp = angular.module('myNinjaApp', ['ngRoute']);

myNinjaApp.config(['$routeProvider', function($routerProvider){
  $routerProvider
    .when('/home', {
        templateUrl: 'views/home.html'
    })
    .when('/directory', {
        templateUrl: 'views/directory.html',
        controller: 'NinjaController'
    })
    .otherwise({
      redirectTo: '/home'
    });

}]);

myNinjaApp.controller('NinjaController', ['$scope', function($scope){

  $scope.removeNinja = function(ninja){
    var removedNinja = $scope.ninjas.indexOf(ninja);
    $scope.ninjas.splice(removedNinja, 1);
  };

$scope.addNinja = function(){
  $scope.ninjas.push({
      name: $scope.newninja.name,
      belt: $scope.newninja.belt,
      rate: parseInt($scope.newninja.rate),
      available:true
  });

  $scope.newninja.name = "";
  $scope.newninja.belt = "";
  $scope.newninja.rate = "";

};

  $scope.ninjas = [
      {
        name: "Yoshi",
        belt:"green",
        rate: 50,
        available:true,
        thumb: "content/img/yoshi.png"
      },
      {
        name: "Crystal",
        belt:"yellow",
        rate: 10,
        available:true,
        thumb: "content/img/crystal.png"
      },
      {
        name: "Ryu",
        belt:"black",
        rate: 30,
        available:true,
        thumb: "content/img/ryu.png"
      },
      {
        name: "Shaun",
        belt:"purple",
        rate: 500,
        available:true,
        thumb: "content/img/shaun.png"
      }
    ];

}]);
