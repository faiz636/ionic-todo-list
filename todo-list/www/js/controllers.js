/**
 * Created by Muhammad Faizan Khan on 12/09/2015.
 */
angular.module('starter')
  .controller("todoCtrl", function ($scope,dataService) {
    this.task = "";
    $scope.list = dataService.getTodoList();
    $scope.checkClick = function(checkedObject){
      console.log("check todo "+checkedObject);
      dataService.taskDone(checkedObject);
    };
    $scope.delClick = function(delObject){
      console.log("del todo "+delObject);
      dataService.removeFromList(delObject,dataService.getTodoList())
    };
    $scope.addTask = function(){
      var t = this.task;
      if(t.length>0) {
        console.log(t);
        this.task = "";
        dataService.addTask({text: t, checked: false});
      }else{
        console.log("enter string");
      }

    };
  })

  .controller("doneCtrl", function ($scope,dataService) {
    $scope.a = "welcome to done";
    $scope.list = dataService.getDoneList();
    $scope.checkClick = function(checkedObject){
      console.log("check done"+checkedObject);
      dataService.taskUnDone(checkedObject);
    };
    $scope.delClick = function(delObject){
      console.log("del done"+delObject);
      dataService.removeFromList(delObject,dataService.getDoneList())
    };
  });
