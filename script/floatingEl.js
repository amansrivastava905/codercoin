document.querySelector(".floating-btn").addEventListener("click",showup);

function showup()
{
    
    const div=document.querySelector(".floating-container");
    if(div.style.bottom=="0vh"){
        div.style.bottom="-100vh";
        document.getElementById('coverAll3').style.display = 'none';
    }
    else{
        document.getElementById('coverAll3').style.display = 'block';
    	div.style.bottom="0vh";
    }
}