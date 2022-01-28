//Save to Local Storage
let taskArray = [];
function AddToLocalStorage(something){
    taskArray.push(something);
    localStorage.setItem('Tasks',JSON.stringify(taskArray));
}
function UpdateLocalStorageItem(itemToUpdate){
    //Search for the item and the splice
    //Also need Index
    let idx = taskArray.indexOf(itemToUpdate);
    taskArray.splice(idx,1);
//     taskArray.splice(idx,1,itemToUpdate);
//    SaveToLocalStorage();
AddToLocalStorage(itemToUpdate);
}

function SaveToLocalStorage(){
    localStorage.setItem('Tasks',JSON.stringify(taskArray));
}

let localStorageItem;
function GetLocalStorage(){
    //Validation
    localStorageItem = localStorage.getItem('Tasks');
    localStorageItem != null ? taskArray = JSON.parse(localStorageItem) : taskArray = [];
    return taskArray;
}
function GetTaskFromLocalStorage(taskName){
    GetLocalStorage();
    console.log(taskArray);
    return taskArray.filter(data => 
        data.TaskName == taskName
    )
}

function RemoveFromLocalStorage(something){
    let idx = taskArray.indexOf(something);
    taskArray.splice(idx,1);
    SaveToLocalStorage();
}

export {AddToLocalStorage, GetTaskFromLocalStorage, RemoveFromLocalStorage, UpdateLocalStorageItem,taskArray}