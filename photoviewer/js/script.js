var app = angular.module('myApp', ["ngResource", "ngAnimate"]);

app.controller("SliderController", ["$scope", "$resource",
function ($scope,$resource) {
    var contents = $resource("data/data.json");
    $scope.images = contents.query();
}]);