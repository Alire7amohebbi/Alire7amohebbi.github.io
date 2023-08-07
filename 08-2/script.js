let res = document.getElementById("res")
let pi = Math.PI
let input=document.getElementById("no1")

const mohit=n=>  n*pi

document.getElementById("calc").onclick=function(){
    res.value=mohit(input.value)
}