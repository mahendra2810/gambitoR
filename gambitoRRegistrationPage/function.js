function ok(){
  var mobileNumber=document.getElementById("phone");
  var firstPassword=document.getElementById("password");
  var secondPassword=document.getElementById("pass");
  if(mobileNumber.value.length!=10){
    alert("Invalid Mobile Number");
    return false;
  }
  if(firstPassword.value!=secondPassword.value){
    alert("Confirm Password should be same as New Password");
    return false;
  }
  return true;
}
