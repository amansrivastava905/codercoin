const passBtn=document.querySelector(".password");
passBtn.addEventListener("click",makeVissible);


function makeVissible(){
   div=document.querySelector(".password-setting");
   if(div.style.display=="none")
   {
       div.style.display="block";
   }
   else{
       div.style.display="none";
   }
}