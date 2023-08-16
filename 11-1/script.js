let a=[];
let put=document.getElementById("put-box");
let btn=document.getElementById("put-btn");
let arr=document.getElementById("arr-box");
let med=document.getElementById("get-btn");
let elm=document.getElementById("elm-box");
btn.onclick=function(){
    arr.innerHTML+=put.value+',';
    a.unshift(Number(put.value))
    put.value="";
}



med.onclick=function(){
    a.sort((a, b) => a - b)
let b=a.length;
let c=(b%2==0)? true: false;
if (c==false){
    elm.innerHTML=a[(b+1)/2-1]
}
else{
    elm.innerHTML=(a[(b/2)]+a[(b-2)/2])/2
}}