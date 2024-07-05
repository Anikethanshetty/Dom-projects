 var a =document.querySelector("h5")
 var add=document.querySelector("#add")
 var check=0


 add.addEventListener("click",function(){
   if(check==0){
      a.innerHTML="Freinds"
      a.style.color="green"
      add.innerHTML="Remove Friend"
      check=1
   }
   else if (check==1){
      a.innerHTML="Stranger"
      a.style.color="red"
      add.innerHTML="Add Friend"

      check=0
   } 
 
 })