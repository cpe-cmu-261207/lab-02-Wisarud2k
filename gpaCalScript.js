document.addEventListener('DOMContentLoaded',function () {
    document.querySelector('#submit').disable = true;
    document.querySelector('#id').onkeyup = function () {
        var todoInput = document.querySelector('#id');
        var submitTodo = document.querySelector('#submit');
        if(todoInput.value.length === 0){
            submitTodo.disable = true;
        } else {
            submitTodo.disable = false;
        }
    
    };

    document.querySelector('#subject').onkeyup = function () {
        var todoInput = document.querySelector('#subject');
        var submitTodo = document.querySelector('#submit');
        if(todoInput.value.length === 0){
            submitTodo.disable = true;
        } else {
            submitTodo.disable = false;
        }
    
    };


    document.querySelector('form').onsubmit = function () {
        var submit = document.querySelector('#submit');
        var tbl = document.querySelector('#tbl1');
        var row = document.createElement('tr');
        // input for different colum
        var c1Input = document.querySelector('#id');
        var c2Input = document.querySelector('#subject');
        var c3Input = document.querySelector('#grade');
        // create tag th
        var c1 = document.createElement('th');
        var c2 = document.createElement('th');
        var c3 = document.createElement('th');
        //tag th with  delete button
        var deleteButton = document.createElement('button');
        deleteButton.innerHTML = "delete";
        //function for delete button
        deleteButton.onclick = function () {
            tbl.removeChild(row);
        }
        // add text to individual th tag
        c1.innerHTML = c1Input.value;
        c2.innerHTML = c2Input.value;
        c3.innerHTML = c3Input.value;
        // append to row and table
        row.append(c1);
        row.append(c2);
        row.append(c3);
        row.append(deleteButton);
        tbl.append(row);
        console.log('test');
        //clear text when submit
        c1Input.value = '';
        c2Input.value = '';
        c3Input.value = '';
        submit.disabled = false;
        return false;
        };
});