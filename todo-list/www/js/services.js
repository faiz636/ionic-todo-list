/**
 * Created by Muhammad Faizan Khan on 12/09/2015.
 */
angular.module('starter')
.service("dataService",function(){
    var todoList = [];//  {text: " todo ", checked: false}  ];
    var doneList = [];//  {text: "done", checked: true} ];
    this.getTodoList = function(){
      return todoList;
    };
    this.getDoneList = function(){
      return doneList;
    };
    this.addTask = function(obj){
      todoList.push(obj);
    };
    this.taskDone = function(obj){
      removeObjectFromList(obj,todoList);
      obj.checked = true;
      doneList.push(obj);
    };
    this.taskUnDone = function(obj){
      removeObjectFromList(obj,doneList);
      obj.checked = false;
      todoList.push(obj);
    };
    this.removeFromList = function(obj,list){
      removeObjectFromList(obj,list);
    };
    var removeObjectFromList = function(obj,list){
      var i=list.indexOf(obj);
      list.splice(i,1);
    }

  });
