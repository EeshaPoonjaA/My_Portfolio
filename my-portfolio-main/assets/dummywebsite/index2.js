
let diva1=[];
let t=1;
idu=localStorage.getItem("idu");
var items=[{img:'img1',text:101},{img:'img2',text:103},
         {img:'img3',text:30},{img:'img4',text:30}]

const container = document.querySelector(".img-con");
localStorage.setItem('key',items.length);


for(i=0;i<items.length;i++){
    
    diva1[i] = document.createElement("div");
    const node1= document.createElement("img"); 
    node1.src="./assets/shop/"+items[i].img+".png";  
    node1.style.height='30vh';
    node1.style.width='20vw';
    diva1[i].appendChild(node1);
    const bnode=document.createElement("button");
    bnode.id=i;
  


    const btextnode = document.createTextNode("ADD TO KART");
    bnode.appendChild(btextnode);
    const textnode = document.createTextNode('Rs. '+items[i].text+'/-');
    diva1[i].appendChild(textnode);
    diva1[i].appendChild(bnode);
   /* diva1[i].appendChild(bnode);*/
   
    container.appendChild(diva1[i]);
   /* var jsonString = JSON.stringify(container);
    console.log(jsonString)
    localStorage.setItem(i, jsonString);*/
    
    

}



count=document.querySelectorAll("button");

d=document.querySelectorAll("button");
d.forEach(function(b){b.addEventListener('click',function(){
    /*var storedJsonString = localStorage.getItem(b.id);
      
    // Parse the JSON string back to an object
    var retrievedObject = JSON.parse(storedJsonString);

    // Log the retrieved object
    console.log(retrievedObject);*/
    
  
        localStorage.setItem('img'+idu+b.id,items[b.id].img);
        localStorage.setItem('text'+idu+b.id,items[b.id].text);
      
        const x3=localStorage.getItem('name'+idu+b.id);
        console.log(x3)
        if(x3==null){
                localStorage.setItem('name'+idu+b.id,b.id);
                localStorage.setItem('quan'+idu+b.id,t);
   
        }
        else{
            t=localStorage.getItem('quan'+idu+b.id);
            t=Number(t)+1;
            localStorage.setItem('quan'+idu+b.id,t);
        }
    const x1=localStorage.getItem('img'+idu+b.id);
    console.log(x1)
    const x2=localStorage.getItem('text'+idu+b.id);
    console.log(x2)
   
    const x4=localStorage.getItem('quan'+idu+b.id);
    console.log(x4)

    /*diva2 = document.createElement("div");
    const node12= document.createElement("img"); 
    node12.src="./assets/shop/"+x1+".png";  
    node12.style.height='30vh';
    node12.style.width='20vw';
    diva2.appendChild(node12);
   const textnode = document.createTextNode(x2+'ordered');
    diva2.appendChild(textnode);
  
   container2=document.querySelector("addcart");
    container2.appendChild(diva2);
    alert('done')*/
 
  
})});

