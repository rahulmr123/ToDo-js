var input = document.getElementById('new-task');
var inputButton = document.getElementsByTagName('button')[0];
var incompleteholder = document.getElementById('incomplete-tasks');
var completeholder = document.getElementById('completed-tasks');

var addTask =  function(){

  var listItem = createNewTask(input.value);

 incompleteholder.appendChild(listItem);
 bindTaskEvents(listItem,taskCompleted);
 input.value = ' ';



}
var createNewTask = function (taskstring){

var listItem =document.createElement('li');
var editButton = document.createElement('button');
var deleteButton = document.createElement('button');
var checkBox = document.createElement("input");
var editInput = document.createElement("input");
var label = document.createElement("label");
//editButton.text = "edit";
checkBox.type = "checkbox";
editInput.type= "text";
editButton.innerText="edit";
deleteButton.innerText = "delete";
editButton.className = "edit";
deleteButton.className = "delete";


label.innerText = taskstring;


listItem.appendChild(checkBox);
listItem.appendChild(label);

listItem.appendChild(editInput);
listItem.appendChild(editButton);
listItem.appendChild(deleteButton);

return listItem;


}
inputButton.addEventListener("click",addTask);

var editTask = function () {
  console.log("Edit Task...");
var listItem =this.parentNode;
var editInput =listItem.querySelector("input[type=text]");
var label =listItem.querySelector("label");

var containClass = listItem.classList.contains("editMode");

if(containClass){

label.innerText =editInput.value;



}
else {
  editInput.value = label.innerText;
}

listItem.classList.toggle("editMode");


}
var bindTaskEvents = function (listItem ,eventHandler){
  var editButton = listItem.querySelector("button.edit");
  var deleteButton = listItem.querySelector("button.delete");
  var checkBox = listItem.querySelector("input[type=checkbox]");
editButton.addEventListener("click",editTask);
deleteButton.addEventListener("click",deleteTask);
checkBox.onchange = eventHandler;

}
var deleteTask = function(){

var listItem = this.parentNode;
var ul =listItem.parentNode;
ul.removeChild(listItem);


}
var taskCompleted = function (){
var listItem = this.parentNode;
completeholder.appendChild(listItem);

bindTaskEvents(listItem,taskincomplete);

}
var taskincomplete = function(){
  var listItem = this.parentNode;
  incompleteholder.appendChild(listItem);
  bindTaskEvents(listItem,taskCompleted);
}