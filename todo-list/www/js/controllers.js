/**
 * Created by Muhammad Faizan Khan on 12/09/2015.
 */
angular.module('starter')
  .controller("todoCtrl", function ($scope) {
    $scope.a = "welcome to todo";
    $scope.list = [
      {text: "a", checked: true},
      {text: "b", checked: false},
      {text: "c", checked: true},
      {text: "d", checked: true},
      {text: "e", checked: true},
      {text: "a", checked: false},
      {text: "b", checked: true},
      {text: "c", checked: true},
      {text: "d", checked: false},
      {text: "e", checked: true},
      {text: "a", checked: true},
      {text: "b", checked: false},
      {text: "c", checked: true},
      {text: "d", checked: true},
      {text: "e", checked: false}
    ];
  })

  .controller("doneCtrl", function ($scope) {
    $scope.a = "welcome to done";
    $scope.list = [
      {text: "a", checked: true},
      {text: "b", checked: false},
      {text: "c", checked: true},
      {text: "d", checked: true},
      {text: "e", checked: true},
      {text: "a", checked: false},
      {text: "b", checked: true},
      {text: "c", checked: true},
      {text: "d", checked: false},
      {text: "e", checked: true},
      {text: "a", checked: true},
      {text: "b", checked: false},
      {text: "c", checked: true},
      {text: "d", checked: true},
      {text: "e", checked: false}
    ];
  });
