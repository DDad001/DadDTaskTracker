import MakeTaskObj from "./task.js";
import {AddToLocalStorage, GetTaskFromLocalStorage, RemoveFromLocalStorage, UpdateLocalStorageItem,taskArray} from "./localStorage.js";

let name = document.querySelector('#name');
let description = document.getElementById('description');
let priority = document.getElementById('priority');
let dueDate = document.querySelector('#duedate');
let editBtn = document.getElementById('editBtn');
let saveBtn =  document.getElementById('saveBtn');
let statusChange = document.getElementById('statusChange');

//need to remove from local storage item 
//need to display info on card
//need to change id for modals everytime they generate
//need to change model color based on priority
//need to change model to in-progress or completed based on status

let injectElement = document.getElementById('injectElement');

let task;
saveBtn.addEventListener('click', function (){

    console.log(name.value);
    console.log(description.value);
    console.log(priority.value);
    console.log(dueDate);

    task = MakeTaskObj(name.value,description.value,priority.value,dueDate,'ToDo');
    console.log(task);
    AddToLocalStorage(task);
    MakeCard(name.value,description.value,priority.value,statusChange,dueDate);

});


function MakeCard(name,description,priority,statusChange,dueDate)
{

    let divRow = document.createElement('div');
    divRow.className="row";
    
    let div1 = document.createElement('div');
    div1.className = "col-12 d-flex justify-content-start";

    let div2 = document.createElement('div');
    div2.className = "card mt-2 bgColorGray";
    div2.style = "width: 18rem;";
    div2.id ="priority";

    let div3 = document.createElement('div');
    div3.className = "card-body";

    let h5 = document.createElement('h5');
    h5.className = "card-title text-center white";
    h5.textContent = name;

    let div4 = document.createElement('div');
    div4.className = "d-flex justify-content-center";


    let div5 = document.createElement('div');
    div5.className = "d-flex justify-content-center mt-4";


    let button = document.createElement('button');
    button.setAttribute("data-bs-toggle","modal");
    button.setAttribute("data-bs-target", "#Modal");
    button.className = "btn btn-secondary";
    button.type ="button";
    button.textContent = "Edit Task";
    button.id ="editBtn";

    button.addEventListener('click',function(){

        let obj = GetTaskFromLocalStorage("Angel");
        console.log(obj);
    });


    let div6 = document.createElement('div');
    div6.className = "d-flex justify-content-center mt-4 mx-2";


    let button2 = document.createElement('button');
    button2.type = "button";
    button2.className="btn btn-secondary";
    button2.setAttribute("data-bs-toggle", "modal");
    button2.setAttribute("data-bs-target","#staticBackdrop")
    button2.textContent = "View Task";


    let div7 = document.createElement('div');
    div7.className = "modal fade";
    div7.id = "staticBackdrop";
    div7.setAttribute("data-bs-backdrop","static");
    div7.setAttribute("data-bs-keyboard", "false");
    div7.tabIndex = "-1";
    div7.setAttribute("aria-labelledby","staticBackdropLabel")
    div7.ariaHidden = "true";
   


    let div8 = document.createElement('div')
    div8.className ="modal-dialog";


    let div9 = document.createElement('div');
    div9.className = "modal-content";

    let div10 = document.createElement('div');
    div10.className = "modal-header";


    let h52 = document.createElement('h5');
    h52.className ="modal-title";
    h52.id = "staticBackdropLabel";
    h52.textContent = name;



    let buttonNext = document.createElement('button')
    buttonNext.type = "button";
    buttonNext.className = "btn-close";
    // buttonNext.dismiss ="modal";
    buttonNext.setAttribute("data-bs-dismiss", "modal")
    buttonNext.ariaLabel = "Close";


    let div11 = document.createElement('div');
    div11.className = "modal-body";


    let divRow1 = document.createElement('div');
    divRow1.className= "row"
    
    let div12 = document.createElement('div');
    div12.className = "col-12 text-center";


    let p = document.createElement('p');
    p.textContent = description;


    let div13 = document.createElement('div');
    div13.className = "modal-footer";

    let button3 = document.createElement('button');
    button3.type = "button";
    button3.className = "btn btn-secondary";
    button3.setAttribute("data-bs-dismiss", "modal");
    button3.textContent = "Close";


    let button4 = document.createElement('button');
    button4.type = "button";
    button4.className ="btn btn-primary";
    button4.textContent = "Understood";


    let div14 = document.createElement('div');
    div14.className = "modal fade";
    div14.id = "Modal";
    div14.tabIndex ="-1";
    div14.setAttribute("aria-labelledby", "ModalLabel")
    div14.ariaHidden="true";


    let div15 = document.createElement('div');
    div15.className="modal-dialog";



    let div16 = document.createElement('div');
    div16.className="modal-content";



    let div17 = document.createElement('div');
    div17.className="modal-header";


    let h53 = document.createElement('h5');
    h53.className ="modal-title";
    h53.id = "ModalLabel";
    h53.textContent = "Task Info";


    let button5 = document.createElement('button');
    button5.type = "button";
    button5.className ="btn-close";
    button5.setAttribute("data-bs-dismiss", "modal");
    button5.ariaLabel = "Close"



    let div18 = document.createElement('div');
    div18.className = "modal-body p-0";



    let div19 = document.createElement('div');
    div19.className = "row mx-5";


    let div20 = document.createElement('div');
    div20.className = "col-12 mx-5";

    let label = document.createElement('label');
    label.for= "fname"
    label.textContent = "Name:";
    

    let input = document.createElement('input');
    input.type = "text";
    input.id = "fname";
    input.name = "fname";
    input.size = "25";
    input.placeholder = name;



    let div21 = document.createElement('div');
    div21.className = "row mx-5";


    let div22 = document.createElement('div');
    div22.className = "col-12 mx-2";

    let label2 = document.createElement('label');
    label2.for= "fname"
    label2.textContent ="Description:";
    

    let input2 = document.createElement('input');
    input2.type = "text";
    input2.id = "fname";
    input2.name = "fname";
    input2.size = "25";
    input2.placeholder = description;



    let div23 = document.createElement('div');
    div23.className = "row mx-2";


    let div24 = document.createElement('div');
    div24.className = "col-3 p-0";

    let label3 = document.createElement('label');
    label3.for= "fname"
    label3.textContent ="Priority:";
    label3.className ="mt-2 mx-5";
    


    let div25 = document.createElement('div');
    div25.className ="col-8 mx-3";


    let select = document.createElement('select');
    select.className = "form-select";
    select.ariaLabel ="Default select example";
    select.width = "20px";
    select.id = "priority"

    
    
    let option = document.createElement('option');
    option.textContent = priority;

    let option2 = document.createElement('option');
    option2.value = "Low";
    option2.textContent = "Low";

    let option3 = document.createElement('option');
    option3.value = "Medium";
    option3.textContent = "Medium";

    let option4 = document.createElement('option');
    option4.value = "High";
    option4.textContent = "High";



    let divRow2 = document.createElement('div');
    divRow2.className = "row mx-2";

    let div26 = document.createElement('div');
    div26.className = "col-3 p-0";
    
    let label4 = document.createElement('label');
    label4.for ="fname";
    label4.className ="mt-2 mx-5";
    label4.textContent = "Status:";



    let div27 = document.createElement('div');
    div27.className ="col-8 mx-3";

    let select1 = document.createElement('select');
    select1.className = "form-select";
    select1.ariaLabel ="Default select example";
    select1.width = "20px";
    
    let option5 = document.createElement('option');
    option5.textContent = "Select a Status";

    let option6 = document.createElement('option');
    option6.value = "ToDo";
    option6.textContent = "To-Do";

    let option7 = document.createElement('option');
    option7.value = "InProgress";
    option7.textContent = "In-progress";

    let option8 = document.createElement('option');
    option8.value = "Completed";
    option8.textContent = "Completed";

    // select1.addEventListener('change',function(){

    //     if(option5.textContent == "In-progress")
    //     {
    //         div1.className = "col-12 d-flex justify-content-center";
    //         UpdateLocalStorageItem(task);
    //     }
    // });

    // button8.addEventListener('click',function(){



    // });

    taskArray.forEach(element => {

        if(priority == "Low")
        {
            div2.className = "card mt-2 bgColorGray";
        }
        else if(priority == "Medium")
        {
            div2.className = "card mt-2 bgColorYellow";
        }
        else if(priority == "High")
        {
            div2.className = "card mt-2 bgColorRed";
        }
    });


 

    let div28 = document.createElement('div');
    div28.className ="row mx-4";

    let div29 = document.createElement('div');
    div29.className="col-12 mx-5";
    
    let label5 = document.createElement('label');
    label5.for="fname";
    label5.textContent ="Due Date:";

    let input4 = document.createElement('input');
    input4.type = "date";
    input4.id ="fname";
    input4.name="fname";
    input4.placeholder = dueDate;


    let div30 = document.createElement('div');
    div30.className="modal-footer";


    let button6 = document.createElement('button');
    button6.type="button";
    button6.className="btn btn-secondary";
    button6.setAttribute("data-bs-dismiss", "modal");
    button6.textContent="Close";


    let button7 = document.createElement('button');
    button7.type ="button";
    button7.className="btn btn-danger";
    button7.textContent="Remove Task";
    button7.id="button7"

    // let removeFade = getElementByClassName('Modal-backdrop fade show');

    button7.addEventListener('click',function(){

        RemoveFromLocalStorage(task);
        divRow.remove();
        div7.setAttribute("data-bs-backdrop","false");
        div7.remove();
    });



    let button8 = document.createElement('button');
    button8.type = "button";
    button8.className="btn btn-primary";
    button8.textContent = "Save";
    button8.id = "saveBtn";


    button8.addEventListener('click',function(){
        UpdateLocalStorageItem(task);
        taskArray.forEach(i =>{
            if(statusChange == "To-Do")
            {
                div1.className = "col-12 d-flex justify-content-start";
            }
            else if(statusChange == "In-progress")
            {
                div1.className = "col-12 d-flex justify-content-center";
            }
            else if(statusChange == "Completed")
            {
                div1.className = "col-12 d-flex justify-content-end";
            }
        })
    });


    div6.appendChild(button);//////

    divRow1.appendChild(div12);////////
    div12.appendChild(p);//////


    div11.appendChild(divRow1);///////

    div13.appendChild(button3);/////
    div13.appendChild(button4);///////


    div10.appendChild(h52);////////
    div10.appendChild(buttonNext);///////


    div9.appendChild(div10);//////
    div9.appendChild(div11);//////
    div9.appendChild(div13);/////


    div8.appendChild(div9);//////


    div7.appendChild(div8);///////



    div20.appendChild(label);//////
    div20.appendChild(input);/////

    div19.appendChild(div20);/////


    div22.appendChild(label2);/////
    div22.appendChild(input2);//////

    div21.appendChild(div22);///////

    div24.appendChild(label3);//////

    div23.appendChild(div24);/////

    

    div23.appendChild(div25);///////


    select.appendChild(option)
    select.appendChild(option2)
    select.appendChild(option3)
    select.appendChild(option4)

    div25.appendChild(select)


    select1.appendChild(option5);
    select1.appendChild(option6);
    select1.appendChild(option7);
    select1.appendChild(option8);
    div27.appendChild(select1);

    div26.appendChild(label4);////////


    divRow2.appendChild(div26);/////
    divRow2.appendChild(div27);///////
    

    div29.appendChild(label5);///////
    div29.appendChild(input4);///////

    div28.appendChild(div29);///////////

    
    div18.appendChild(div19);/////
    div18.appendChild(div21);//////
    div18.appendChild(div23);///////
    div18.appendChild(divRow2);//////
    div18.appendChild(div28);//////
    
    
        div17.appendChild(h53);//////
        div17.appendChild(button5);///////



    div30.appendChild(button6);///////
    div30.appendChild(button7);//////////
    div30.appendChild(button8);/////////



    div16.appendChild(div17);//////
    div16.appendChild(div18);//////
    div16.appendChild(div30)


    div15.appendChild(div16);//////////


    div14.appendChild(div15)////////


    div6.appendChild(button2);//////
    div6.appendChild(div7);///////


    div4.appendChild(div5);/////
    div4.appendChild(div14);/////
    div4.appendChild(div6);//////


    div3.appendChild(h5);///////
    div3.appendChild(div4);//////


    div2.appendChild(div3);/////

    div1.appendChild(div2);///////

    divRow.appendChild(div1);//////



    div5.appendChild(button);


    
    injectElement.appendChild(divRow);
    // newlabel.setAttribute("for",id_from_input);
    // newlabel.innerHTML = "Here goes the text";
}


// function DisplayOnReload() {
  
//       for (let i = 0; i < taskArray.length; i++) {
//        MakeCard(task[i]);
//    }
// }
// DisplayOnReload();