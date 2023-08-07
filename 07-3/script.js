let id=document.getElementById("id");let msg=document.getElementById("msg");
let btn=document.getElementById("btn");

btn.onclick=function(){
    if (id.value.length!=10){
        msg.innerHTML="invalid"
    }
    else{
        let b;let c=0;
        let a=id.value.substr(1,9)
        for (let i=0;i<9;i++){
            b=Number(a[i])*(i+2)
            c+=b;
        }
        let d=id.value[0];
        c%=11;
        if (c<2){
            c=c
        }
        else {
            c=11-c
        }
        if(a[0]=="0" && a[1]=="0" && a[2]=="0"){
            msg.innerHTML=="invalid";
        }
        else if(id.value[0]==id.value[1]==id.value[2]==id.value[3]==id.value[4]==id.value[5]==id.value[6]==id.value[7]==id.value[8]==id.value[9]){
            msg.innerHTML=="invalid"
        }
    
        else if(d==c){
            msg.innerHTML="valid"
        }
        
        else{
            msg.innerHTML="invalid"
        }
    }
}