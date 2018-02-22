var myNinjaApp = angular.module('myNinjaApp', ['ngRoute', 'ngAnimate']);

myNinjaApp.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'NinjaController'
    })
    .when('/directory', {
        templateUrl: 'views/directory.html',
        controller: 'NinjaController'
    })
    .otherwise({
      redirectTo: '/home'
    });

}]);

myNinjaApp.directive('randomNinja', [function(){
  return {
    restrict: 'E',
    scope: {
        ninjas: '=',
        title: '='
    },
    templateUrl: 'views/random.html',
    transclude:true,
    replace:true,
    controller: function($scope){
        $scope.random = Math.floor(Math.random()*4);
    }
  };
}]);

myNinjaApp.controller('NinjaController', ['$scope', '$http', function($scope, $http){

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

/*  $scope.ninjas = [
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

    console.log(angular.toJson($scope.ninjas));*/

    $scope.removeAll = function(){
      $scope.ninjas = [];
    }

    $http.get('data/ninjas.json').then(function(response){
        $scope.ninjas = response.data;
    });

}]);
