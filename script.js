const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');

const fname_error = document.getElementById('fname-error');
const lname_error = document.getElementById('lname-error');
const email_error = document.getElementById('email-error');
const password_error = document.getElementById('password-error');

let fields = document.getElementsByClassName("field");
let errors = document.getElementsByClassName("error");
let icon = document.getElementsByClassName("icon");

function clearErrors(){
    for(var i=0; i<fields.length; i++){
        fields[i].addEventListener("keyup", function(){
            for(var j = 0; j <errors.length; j++){
                errors[j].style.display = "none"
            }
            
        })
    }
}

clearErrors()

function clear(){
    for(var i=0; i<fields.length; i++){
        fields[i].addEventListener("keyup", function(){
            for(var k = 0; k < icon.length; k++){
                icon[k].style.display = "none"
            }
            
        })
    }
}

clear()



function checkFields(){
    if(fname.value == ""){
        fname_error.style.display = "block";
    }
    if(lname.value == ""){
        lname_error.style.display = "block";
    } 
    if(email.value == ""){
        email_error.style.display = "block";
    }
    if(password.value == ""){
        password_error.style.display = "block";
    }
}



function check(){
    if(fname.value == ""){
        icon.style.display = "block";
    }
    if(lname.value == ""){
        icon.style.display = "block";
    } 
    if(email.value == ""){
        icon.style.display = "block";
    }
    if(password.value == ""){
        icon.style.display = "block";
    }
}



function validateForm(){
    checkFields();
    if(fname.value != "" && lname.value != "" && email.value != "" && password.value != ""){
        return true;
    }else{
        return false;
    }
}

function validateForms(){
    check();
    if(fname.value != "" && lname.value != "" && email.value != "" && password.value != ""){
        return true;
    }else{
        return false;
    }
}