let no1=document.getElementById("no1")
document.getElementById("calc").onclick=function(){
    let a=0
    let n=Number(no1.value)
    for(let i=1;i<n+1;i++){
        if (n%i==0){a+=1}
    }
    if (a==2){
        document.getElementById("res").value=true
    }
    else{document.getElementById("res").value=false}
}