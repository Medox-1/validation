


function validate(){
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;
var confirmPass = document.getElementById("confirmPass").value;
var massage = document.getElementById("error");
massage.style.color="#fff";
massage.style.textAlign="center";
massage.style.backgroundColor="Red";
massage.style.padding="10px";
massage.style.transition="all 1s ease"; 
massage.style.marginBottom="15px"; 



if(name=="" && password=="" && email=="" && confirmPass==""){
    massage.innerHTML="Please Enter Data";
    return false;
}else if(name.length<5 || name.length>15){
    massage.innerHTML="Please Insert (5-15) character in User Name ";
return false;
}else if(email.indexOf("@")=="-1"){
    massage.innerHTML="Please Inter Valid E-Mail ";
return false;
}else if(password.length<=8){
    massage.innerHTML="Please AtLeast 8 Character in Password";
return false;
}else if(password!=confirmPass){
    massage.innerHTML="Password And Confirm Password Not Matched";
return false;
}else {
    return true;
}
}