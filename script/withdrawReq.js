const redeemForm=document.querySelector(".redeem-form");
const refillForm=document.querySelector(".refill-form");


function showRedeem(){
    
    if(redeemForm.style.display=="none" || redeemForm.style.display=="")
    {
        refillForm.style.display="none";
        redeemForm.style.display="block";
    }
    else{
        redeemForm.style.display="none";
        refillForm.style.display="none";
    }
    
}


function showRefill(){
    
    if(refillForm.style.display=="none" || refillForm.style.display=="")
    {
        redeemForm.style.display="none";
        refillForm.style.display="block";
    }
    else{
        refillForm.style.display="none";
        redeemForm.style.display="none";
    }
    
}