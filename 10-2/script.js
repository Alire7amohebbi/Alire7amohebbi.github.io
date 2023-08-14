let no1=document.getElementById("no1");
document.getElementById("calc").onclick=function(){
    let n=Number(no1.value);
    let log=0
    for (let i=1;i<n*2;i=i+2){
        if ((i+1)%4==0){i=-i}
        else{i=i}
        log=log+4/i
        if (i<0){
            i=-i
        }
    }
    document.getElementById("res").value=log.toFixed(8)
}