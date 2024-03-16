const btn=document.getElementById("btn");
const qrtext=document.getElementById("qrtext");
const imgqr=document.getElementById("imgqr");

btn.addEventListener('click',()=>
{
    if(qrtext.value.length>0)
    {
        imgqr.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrtext.value;
        qrtext.value="";
    }
    else{
        alert("THIS IS NOT VALID");
    }
})
