log=document.querySelector(".log");

log.addEventListener('click',function(){
    user=document.getElementById("user");

    pa=localStorage.getItem(user.value);
    
    passw=document.getElementById("pass");
    if(pa==passw.value){
      localStorage.setItem("idu",user.value);
        window.location.href = "./index.html";
       
        hh.innerHTML="";
        localStorage.setItem("idu",'user');
    }
  else{
    localStorage.setItem("idu",'user');
console.log("error");
user.value="";
passw.value="";
hh=document.querySelector("h4");
hh.innerHTML="Username or password is incorrect"
  }}

  )


  
