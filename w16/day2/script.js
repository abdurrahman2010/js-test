// document.addEventListener('DOMContentLoaded', function() {
//     const addTaskButton = document.getElementById('add-task');
//     const newTaskInput = document.getElementById('new-task');
//     const taskList = document.getElementById('task-list');

//     addTaskButton.addEventListener('click', function() {
//         const taskText = newTaskInput.value;
//         if (taskText === '') {
//             alert('Пожалуйста, введите задание.');
//             return;
//         }

//         const li = document.createElement('li');
//         li.textContent = taskText;

//         const deleteButton = document.createElement('button');
//         deleteButton.textContent = 'Удалить';
//         deleteButton.addEventListener('click', function() {
//             li.remove();
//         });

//         li.appendChild(deleteButton);
//         taskList.appendChild(li);

//         newTaskInput.value = '';
//     });
// });l

let addBtn = document.getElementById("add-button");
let listbox = document.getElementById("list-box");
let searchBtn = document.getElementById('serch-btn')

addBtn.addEventListener("click", function (event) {
  event.preventDefault();
  let addText = document.getElementById("add-text");
  console.log(addText.value);
  if (addText.value && addText.value != null && addText.value != undefined) {
    let createElement = createToDoItem(addText.value);

    listbox.appendChild(createElement);
  } else {
    alert("siz to do inputtun toltimadiniz ");
  }
  addText.value = "";

  searchBtn.addEventListener('click', function(event){
    event.preventDefault()
  })
});

function createToDoItem(addtextTynMany) {
  let newDiv = document.createElement("div");
  let item = document.createElement("p");
  let deleteButton = document.createElement("button");

  newDiv.className = "newDiv";
  deleteButton.textContent = "delete";
  item.textContent = addtextTynMany;

    deleteButton.addEventListener('click',function(){
        listbox.removeChild(newDiv)
    })

  newDiv.appendChild(item);
  newDiv.appendChild(deleteButton);

  return newDiv;
}
//<div clas = "new div"
