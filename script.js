let name=document.getElementById("name")
let email=document.getElementById("email")
let pass=document.getElementById("password")
let conform=document.getElementById("confirm")

let error_name=document.getElementById("name-error")
let error_email=document.getElementById("email-error")
let error_password=document.getElementById("password-error")
let error_confirm=document.getElementById("confirm-error")

let success=document.getElementById("success")

let form=document.getElementById("form")
let i=0;
form.addEventListener("submit",((e)=>{ 
    
     validate()
     email_validate()
     password_validate()
     if(error_confirm.textContent==""&&error_email.textContent==""&error_name.textContent==""&&error_password.textContent==""){
        success.style.display="block"
     }
     else{
          e.preventDefault() 
     }
}))

function validate(){
    if(name.value!=""){
        name.style.border="2px solid green"
        error_name.textContent=""

    }
    else{
        name.style.border="2px solid red"
       error_name.textContent="Name Should Contain Some Characters"

    }
}

function email_validate(){
    if(email.value.includes("@") && email.value.includes(".")){
        email.style.border="2px solid green"
          error_email.textContent=""
          
    }
    else{
        email.style.border="2px solid red"
        error_email.textContent="Invalid Email ID"
    }
}
function password_validate(){
    if(pass.value.length>=8){
        pass.style.border="2px solid green"
        error_password.textContent=""
        i++
        if(pass.value==conform.value){
            conform.style.border="2px solid green"
            error_confirm.textContent=""
            i++
        }
        else{
            conform.style.border="2px solid red"
            error_confirm.textContent="Password does not match"
        }
    }
    else{
         pass.style.border="2px solid red"
        error_password.textContent="Password Should Contain atleast 8 Characters"
    }
}
