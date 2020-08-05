let streakValue=document.querySelector(".winning-streak .value").textContent;
let streak=document.querySelector(".winning-streak .value");

function streakbar(e){
    streak.style.backgroundSize=e;
}

streakbar(streakValue);
console.log(streak.style.backgroundSize);



let settingDiv=document.querySelector(".settings");
let settingBtn=document.querySelector(".buttons .setting-button");
settingBtn.addEventListener("click",settingVis);

function settingVis(){
    if(settingDiv.style.display=="none")
    {
        settingDiv.style.display="block";
        document.getElementById('coverAll2').style.display = 'block';
    }
    else{
        settingDiv.style.display="none";
        document.getElementById('coverAll2').style.display = 'none';
    }
}