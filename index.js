var sidenav = document.getElementById("sidenav")
var manuicon=document.getElementById("manuicon")
var closenav =document.getElementById("closenav")

manuicon.addEventListener("click",function () 
{

    sidenav.style.right=0
    
})

closenav.addEventListener("click",function ()
 {
    
    sidenav.style.right="-50%"
})