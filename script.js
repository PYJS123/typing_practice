let button, txt;
window.onload = function (){
    button=document.getElementById("button");
    button.onclick=function(){
        txt=document.getElementById("input").value;
        
        change();
    };
};

function change() {
    let children=document.body.children;
    for (child of children) {
        child.remove();
    }
    let newP=document.createElement("p");
    newP.id="test";
    let newDiv=document.createElement("div");
    newDiv.className="centre horiz newpage";
    let newestP=document.createElement("p");
    newestP.id="newtxt";

    newDiv.appendChild(newP);
    newDiv.appendChild(newestP);
    document.body.appendChild(newDiv);

    addEventListener("keydown", (event) => {
        let test=document.getElementById('test');
        let span=document.getElementById('newtxt');
        test.innerText+=span.innerText;
        span.innerText=event.key;
    });
}