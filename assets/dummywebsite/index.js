
   var lgt= document.querySelector(".lgo");
   lgt.addEventListener("click",function(){
    localStorage.setItem("idu",'user');
   })

var h=document.querySelector(".dropdown");
var v=document.querySelectorAll(".dropdowncontent");

let tt=0;
let z=0;
let s=0;

wel=document.querySelector(".welcome");
idu=localStorage.getItem("idu");
if(idu!=null){
wel.innerHTML='welcome '+idu;
}
else{
  wel.innerHTML='welcome user'; 
}
h.addEventListener('click',function(e){
console.log(e);
    if(tt==0){
    for(i=0;i<v.length;i++){
    v[i].classList.add("finalPosition")
   
   
    }
    tt=1;
  
   }
    else{
    for(i=0;i<v.length;i++){
        v[i].classList.remove("finalPosition")
       
        }
        tt=0;
    }
 

    }

)
$(h).click(function(e){
    e.stopPropagation();
  });
$(document).click(function(){
    for(i=0;i<v.length;i++){
        v[i].classList.remove("finalPosition")
       
        }
        tt=0;
  });
 
  const x1=localStorage.getItem('img'+0);
    console.log(x1)
    const x2=localStorage.getItem('text'+0);
    console.log(x2)


  /* var ser1= document.querySelector("#ser1");
   ser1.addEventListener('click',function(){var an1=prompt('search')});
   var ser= document.querySelector("#ser");
   ser.addEventListener('click',function(){var an2=prompt('search')});
*/
