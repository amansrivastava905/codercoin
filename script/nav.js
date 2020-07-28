document.querySelector(".burger-menu").addEventListener("click",navigation);

function navigation()
{
    const burger=document.querySelector("#burger");
    if(burger.classList.contains("fa-bars"))
    {
        burger.classList.remove("fa-bars");
        burger.classList.add("fa-window-close");
    }
    else{
        burger.classList.remove("fa-window-close");
        burger.classList.add("fa-bars");
    }
    const nav=document.querySelector(".nav");
    if(nav.style.left=="0vw"){
        nav.style.left="-100vw";
        document.getElementById('coverAll').style.display = 'none';
    }
    else{
        document.getElementById('coverAll').style.display = 'block';
    	nav.style.left="0vw";
    }
}







