sinu=document.querySelector(".sign");
  sinu.addEventListener('click',function(){
    user=document.getElementById("user");
    passw=document.getElementById("pass");
    if(user.value=='' && passw.value==''){
        console.log("invalid data"); 
hh=document.querySelector("h4");
hh.innerHTML="invalid data";
}
else if( localStorage.getItem(user.value)!=null)
  {console.log("account exists.Create new account");
  hh=document.querySelector("h4");
hh.innerHTML="account exists.Create new account";
}
else{

    localStorage.setItem(user.value,passw.value);
    hh=document.querySelector("h4");
hh.innerHTML="account created";
console.log("account created");

window.location.href = "./login.html";

}
user.value="";
passw.value="";

}

  )