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

    // array for contain information and some variable
    var idArray = [];
    var semesterArray = [];
    var gradeArray = [];
    var calArray =  [];
    var all = 0;

    document.querySelector('form').onsubmit = function () {
        var submit = document.querySelector('#submit');
        var tbl = document.querySelector('#tbl1');
        var row = document.createElement('tr');
        // input for different colum
        var idInput = document.querySelector('#id');
        var subjectInput = document.querySelector('#subject');
        var gradeInput = document.querySelector('#grade');
        var semesterInput = document.querySelector('#semester');
        //check input if its empty or not
        if(idInput.value == '' || subjectInput.value == '' ||gradeInput.value == ''){
            alert('Please fill all the detail');
        }else{
            // create tag th
            var c1 = document.createElement('th');
            var c2 = document.createElement('th');
            var c3 = document.createElement('th');
            var c4 = document.createElement('th');
            var c5 = document.createElement('th');

            // push information to individual array
            idArray.push(idInput.value);
            semesterArray.push(semesterInput.value);
            gradeArray.push(gradeInput.value);
            
            //tag th with  delete button
            var deleteButton = document.createElement('button');
            deleteButton.innerHTML = "delete";
            //function for delete button
            deleteButton.onclick = function () {
                //attempt to delete information inside array
                const id_index = semesterArray.indexOf(c4.innerHTML);
                idArray.splice(id_index,1);
                semesterArray.splice(id_index,1);
                gradeArray.splice(id_index,1);
                calArray.splice(id_index,1);

                tbl.removeChild(row);
               
            }
            c5.append(deleteButton);
            // add text to individual th tag
            c1.innerHTML = idInput.value;
            c2.innerHTML = subjectInput.value;
            c3.innerHTML = gradeInput.value;
            c4.innerHTML = semesterInput.value;
            // append to row and table
            row.append(c1);
            row.append(c2);
            row.append(c4);
            row.append(c3);
            row.append(c5);
            tbl.append(row);
            
        }
        
        //clear text when submit
        idInput.value = '';
        subjectInput.value = '';
        gradeInput.value = '';
        semesterInput.value = '';
        submit.disabled = false;
        return false;
        };
    
    // detect when click all id calculate
    document.querySelector('#all-cal').onclick = function(){
        var semester = document.querySelector('#semester_cal');
        if(semester.value == 1){
            semesterArray.forEach(gradecal_sem1);
        }else if(semester.value == 2){
            semesterArray.forEach(gradecal_sem2);
        }else{
            semesterArray.forEach(gradecal_all);
        }

        
        calArray.forEach(cal_Credit);
        console.log(calArray);
        console.log(calArray.length);
        alert("Your All GPA is" + all/calArray.length);
        calArray.splice(0,calArray.length);
        all = 0;
        return false;
    };
    //detect when click major calculate
    document.querySelector('#major-cal').onclick = function(){
        var semester = document.querySelector('#semester_cal');
        if(semester.value == 1){
            semesterArray.forEach(majorIdCheck1);
        }else if(semester.value == 2){
            semesterArray.forEach(majorIdCheck2);
        }else{
            semesterArray.forEach(majorIdCheckAll);
        }

        calArray.forEach(cal_Credit);
        console.log(calArray);
        alert("Your Major GPA is" + all/calArray.length);
        calArray.splice(0,calArray.length);
        all = 0;
        return false;
    };

    ////oop is crying///
    function majorIdCheck1(item,index){
        //console.log( parseInt((idArray[index] % 10000)/1000));
        if((item == 1) && ((parseInt(idArray[index] / 100000) == 2 && parseInt((idArray[index] % 100000)/10000) == 6 && parseInt((idArray[index] % 10000)/1000) == 1) ||
        (parseInt(idArray[index] / 100000) == 2 && parseInt((idArray[index] % 100000)/10000) == 5 && parseInt((idArray[index] % 10000)/1000) == 9) ) ){
            calArray.push(gradeArray[index])
        }
    }
    function majorIdCheck2(item,index){
        if((item == 2) && ((parseInt(idArray[index] / 100000) == 2 && parseInt((idArray[index] % 100000)/10000) == 6 && parseInt((idArray[index] % 10000)/1000) == 1) ||
        (parseInt(idArray[index] / 100000) == 2 && parseInt((idArray[index] % 100000)/10000) == 5 && parseInt((idArray[index] % 10000)/1000) == 9) ) ){
            calArray.push(gradeArray[index])
        }
    }
    function majorIdCheckAll(item,index){
        if((parseInt(idArray[index] / 100000) == 2 && parseInt((idArray[index] % 100000)/10000) == 6 && parseInt((idArray[index] % 10000)/1000) == 1) ||
        (parseInt(idArray[index] / 100000) == 2 && parseInt((idArray[index] % 100000)/10000) == 5 && parseInt((idArray[index] % 10000)/1000) == 9)  ){
            calArray.push(gradeArray[index])
        }
    }

    function gradecal_sem1(item,index){
        if(item == 1){
            calArray.push(gradeArray[index])
            
        }
    }

    function gradecal_sem2(item,index){        
        if(item == 2){
            calArray.push(gradeArray[index])
            
        }
    }

    function gradecal_all(item,index){    
        calArray.push(gradeArray[index])
    }

    function cal_Credit(value){
        switch(value){
            case 'A':
                all += 4;
                break;
            case 'B+':
                all += 3.5;
                break;
            case 'B':
                all += 3;
                break;
            case 'C+':
                all += 2.5;
                break;
            case 'C':
                all += 2;
                break;
            case 'D+':
                all += 1.5;
                break;
            case 'D':
                all += 1;
                break;
            default:
                all += 0;
            
        }
    }

});