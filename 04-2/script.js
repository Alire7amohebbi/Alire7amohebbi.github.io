let nameId = document.getElementById("name-id");
let fn = document.getElementById("fn");
let btn = document.getElementById("btn");

btn.onclick = function() {
    fn.innerHTML = nameId.value;
}