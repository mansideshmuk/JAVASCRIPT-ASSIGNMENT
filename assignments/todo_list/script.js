var todobutton = document.querySelector('button');
var inputfield = document.querySelector('input');
var todo = document.querySelector('.todos')
var i = 0;
todobutton.addEventListener('click', additem)
function additem(){
    var paragraph = document.createElement('p')
    paragraph.setAttribute("key",i);
    i+=1;
    paragraph.innerHTML = inputfield.value;
    todo.appendChild(paragraph);
    inputfield.value="";
    paragraph.addEventListener('click', deleteitem)
    function deleteitem(){
        todo.removeChild(paragraph)
    }
}





