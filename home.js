let b1=document.getElementById("fn")

b1.onclick=function(){
    location.href="loginforcustomer.html"
}




let b2=document.getElementById("sd")

b2.onclick=function(){
    location.href="loginforvendor.html"
}

let d=document.getElementById("wnat")
let dj=document.getElementById("why")
//  d.classList.toggle("disabled")
d.classList.toggle("focus")
 d.onclick=function () {
  
    d.classList.toggle("active")
    d.classList.toggle("show")
    dj.classList.toggle("show")
    cnt=cnt+1
 }
 let regi=document.getElementById("signup123")

 regi.onclick=function(){
    location.href="register.html"
 }



 