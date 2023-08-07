let res = document.getElementById("res")
let pi = Math.PI
let input=document.getElementById("no1")
function mohit (n) {
    return a=n*pi
}
// document.getElementById("calc").onclick = function(){
//     let input = Number(document.getElementById("no1").value);
//     let res = document.getElementById("res");
//     let pi = Math.PI;
//     res.value=pi*input
// }
document.getElementById("calc").onclick=function(){
    res.value=mohit(input.value)
}