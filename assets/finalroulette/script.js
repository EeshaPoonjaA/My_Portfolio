
    var container = document.getElementById("container");
    var elements = document.getElementsByClassName("element");
    var button1 = document.getElementsByClassName("btn");
  var tri=document.getElementsByClassName("triangle");
    var radius = 100; // Adjust this value to set the radius of the circle
    
   
    var angleIncrement = (2 * Math.PI) / elements.length;
    var angle = 0;
   
    
    for (var i = 0; i < elements.length; i++) {
        var x = Math.cos(angle) * radius;
        var y = Math.sin(angle) * radius;

        elements[i].style.left = x +90 + "px";
        elements[i].style.top = y + 90  + "px";

        angle += angleIncrement;
    }

 var ait= (2 * Math.PI) / tri.length;
 var at = 0;
 var ras=60;
 for (var w = 0; w< tri.length; w++) {
    var xt = Math.cos(at) * ras;
    var yt = Math.sin(at) * ras;

      tri[w].style.left = xt +95+ "px";
      tri[w].style.top = yt +95+ "px";
      var f=w*(10);
     console.log(f);
      tri[w].style.transform = 'rotate('+f+'deg)';

    at += ait;
}



    button1[0].addEventListener('click', function() {
        var container = document.getElementById("container");
        container.classList.add("spin");
        var box1 = document.getElementsByClassName("box");
        box1[0].classList.add("anime");
        var k=Math.random()*10000;
        setTimeout( ballstop,k);
    });

    function ballstop(){
        let array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]
        var g= document.querySelector(".box");
  g.style.animationPlayState="paused";
  var container = document.getElementById("container");
  container.style.animationPlayState="paused";
  var rect = g.getBoundingClientRect();
  var x=rect.x;
  var y=rect.y;
  console.log("x="+rect.x+"y="+rect.y);
  z=[];
  for(j=1;j<37;j++){
   var tk="#element"+j;
   var gk= document.querySelector(tk);
   var rectk = gk.getBoundingClientRect();
   var xk=rectk.x;
   var yk=rectk.y;
   z.push(Math.hypot(x - xk, y - yk));  
   console.log("ans="+Math.hypot(x - xk, y - yk))
   var min = Math.min(...z)
   console.log("min"+min)
    }
    for(j=1;j<37;j++){
        if(z[j]===min){
          console.log("j"+j);
         
         
          var o=document.querySelector(".tt");
         if(o.value==array[j]){
          console.log("you won");
          var u=document.querySelector("h1");
          u.innerHTML="you won"
         }
         else{
          console.log("sorry, your ans"+o.value+"!="+array[j])
          var u=document.querySelector("h1");
          u.innerHTML="Sorry,you lose"
         
        }

        }
}}