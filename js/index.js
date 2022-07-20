var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var email = document.getElementById('email');
var pass = document.getElementById('pass');
form = document.getElementById('form');
emailExp = /[a-z]+\w+@[gmail || hotmail || yahoo]+\.com/g;
form.addEventListener('submit',(e)=>{
e.preventDefault();

if (fname.value=="" ) {
    alert('please enter your First name')
}
else if (lname.value=="" ) {
    alert('please enter your Last name')
}
else if (email.value=="" ) {
    alert('please enter your Email Address')
}
else if (pass.value=="" ) {
    alert('please enter your Password')
}
else if (pass.value.length < 4) {
    alert('Your password is too short')
}
else if (emailExp.exec(email.value)==null) {
    alert('Your email address is not found')
}
else{
    alert('your form has been successfully submited')
}
});
function toggleDisplayPass(){
    let img = document.getElementById('imgPass');
    if (pass.type=="text"){
        pass.type='password'
        img.setAttribute('src' , "./images/visible.svg")
    }
    else{
        pass.type='text'
        img.setAttribute('src' , "./images/invisible.svg")
    }
}