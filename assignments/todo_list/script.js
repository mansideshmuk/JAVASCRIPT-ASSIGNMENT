var todobutton = document.querySelector('button');
var input_todos = document.querySelector('.todos')
let todos = [];

async function main() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const json = await response.json();
        todos = json.slice(0, 10);
        console.log(todos);
        todos.forEach((todo, index) => {
            const newTodo = document.createElement('p');
            newTodo.setAttribute('key', index);
            newTodo.innerHTML = todo.title
            input_todos.appendChild(newTodo);
        })
    } catch (e) {
        console.log(e)
    }
}

todobutton.addEventListener('click', function () {
    input_todos.innerHTML = "";
    todos.filter(todo => todo.completed).forEach((todo, index) => {
        const newTodo = document.createElement('p');
        newTodo.setAttribute('key', index);
        newTodo.innerHTML = todo.title
        input_todos.appendChild(newTodo);
    })
})
main();


















// var todobutton = document.querySelector('button');
// var inputfield = document.querySelector('input');
// var todo = document.querySelector('.todos')
// var i = 0;
// todobutton.addEventListener('click', additem)
// function additem(){
//     var paragraph = document.createElement('p')
//     paragraph.setAttribute("key",i);
//     i+=1;
//     paragraph.innerHTML = inputfield.value;
//     todo.appendChild(paragraph);
//     inputfield.value="";
//     paragraph.addEventListener('click', deleteitem)
//     function deleteitem(){
//         todo.removeChild(paragraph)
//     }
// }





