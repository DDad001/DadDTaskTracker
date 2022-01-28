//create the object

//When a task is made, status is defaulting to ToDo



//Making the Object Here
export default function MakeTaskObj(taskName, taskDesc, priority, dueDate, status){
    let taskObj = {
        ID:1,
        TaskName:taskName,
        TaskDescription:taskDesc,
        Priority:priority,
        DueDate:dueDate,
        Status:status
    }
    return taskObj;
}

