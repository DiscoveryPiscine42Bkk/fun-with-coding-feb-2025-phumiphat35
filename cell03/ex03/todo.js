document.addEventListener("DOMContentLoaded", loadTodos);

function addTodo() {
    let todoText = prompt("Enter a new TO-DO:");
    if (todoText) {
        let todoDiv = document.createElement("div");
        todoDiv.className = "todo";
        todoDiv.innerText = todoText;
        todoDiv.onclick = function () { removeTodo(todoDiv); };

        let ftList = document.getElementById("ft_list");
        ftList.insertBefore(todoDiv, ftList.firstChild);

        saveTodos();
    }
}

function removeTodo(todoDiv) {
    if (confirm("Do you want to delete this TO-DO?")) {
        todoDiv.remove();
        saveTodos();
    }
}

function saveTodos() {
    let todos = [];
    document.querySelectorAll("#ft_list .todo").forEach(todo => {
        todos.push(todo.innerText);
    });
    document.cookie = "todos=" + JSON.stringify(todos) + "; path=/";
}

function loadTodos() {
    let cookies = document.cookie.split("; ");
    let todosCookie = cookies.find(row => row.startsWith("todos="));
    
    if (todosCookie) {
        let todos = JSON.parse(todosCookie.split("=")[1]);
        let ftList = document.getElementById("ft_list");
        todos.forEach(todoText => {
            let todoDiv = document.createElement("div");
            todoDiv.className = "todo";
            todoDiv.innerText = todoText;
            todoDiv.onclick = function () { removeTodo(todoDiv); };
            ftList.appendChild(todoDiv);
        });
    }
}