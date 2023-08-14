let ball=document.getElementById("ball");
let shape=document.getElementById("shape");
let panels=document.getElementById("panles");

let html=document.querySelector("html");

// function log(e){
//     let d=e.pageX;
//     let d2=e.pageY;
//     ball.style.marginTop=d2-20;
//     ball.style.marginLeft=d-20;
// }
html.onmousedown=function log(e){
    let d=e.pageX;
    let d2=e.pageY;
    ball.style.marginTop=d2-20+"px";
    ball.style.marginLeft=d-20+"px";
   // console.log(d,d2);
 }