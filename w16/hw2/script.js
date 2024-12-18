document.addEventListener('DOMContentLoaded', function() {
    const addBtn = document.getElementById("add-button");
    const listbox = document.getElementById("list-box");
    let editingTask = null;

    addBtn.addEventListener("click", function(event) {
        event.preventDefault();
        const addText = document.getElementById("add-text");
        const taskText = addText.value.trim();

        if (taskText) {
            if (editingTask) {
                editingTask.querySelector('p').textContent = taskText;
                editingTask = null;
            } else {
                const createElement = createToDoItem(taskText);
                listbox.appendChild(createElement);
            }
            addText.value = "";
        } else {
            alert("Сіз ToDo input-ты толтырмадыңыз!");
        }
    });

    function createToDoItem(taskText) {
        const newDiv = document.createElement("div");
        const item = document.createElement("p");
        const deleteButton = document.createElement("button");

        newDiv.className = "newDiv";
        item.textContent = taskText;
        deleteButton.textContent = "Өшіру";

        deleteButton.addEventListener('click', function() {
            newDiv.remove();
        });

        newDiv.addEventListener('dblclick', function() {
            editingTask = newDiv;
            document.getElementById("add-text").value = item.textContent;
            newDiv.remove();
        });

        newDiv.appendChild(item);
        newDiv.appendChild(deleteButton);

        return newDiv;
    }
});
