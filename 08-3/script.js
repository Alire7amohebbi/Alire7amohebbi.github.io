let die=document.getElementById("die")
const random=()=>{
    let a=Math.random()*6;
    while (a==0){
        let a=Math.random()*6;
    }
    return Number(a.toFixed());
}
function pic(){
    let b=random();
    switch(true){
        case b==1:
            die.setAttribute("src","die1.svg");break;
        case b==2:
            die.setAttribute("src","die2.svg");break;
        case b==3:
            die.setAttribute("src","die3.svg");break;
        case b==4:
            die.setAttribute("src","die4.svg");break;
        case b==5:
            die.setAttribute("src","die5.svg");break;
        case b==6:
            die.setAttribute("src","die6.svg");break;
        }
}

let pic2=setInterval(pic,500)

die.onclick=function(){
    clearInterval(pic2);    
}