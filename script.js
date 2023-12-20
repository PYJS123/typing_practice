let button, txt;
window.onload = function (){
    button=document.getElementById("button");
    button.onclick=function(){
        txt=document.getElementById("input").value;
        
        change();
    };
};

function trueKey(key) {   // Input event.key, output what should be on webpage
    if (key=="") {
        return "&nbsp";
    } else if (key.length != 1) {
        return "";
    } else {
        return key;
    }
}

function change() {
    let children=document.body.children;
    for (child of children) {
        child.remove();
    }
    let newP=document.createElement("p");
    newP.id="test";
    let newDiv=document.createElement("div");
    newDiv.className="newpage";
    let newestP=document.createElement("p");
    newestP.id="newtxt";

    newDiv.appendChild(newP);
    newDiv.appendChild(newestP);
    document.body.appendChild(newDiv);

    addEventListener("keydown", (event) => {
        let test = document.getElementById('test');
        let span = document.getElementById('newtxt');
        test.innerHTML += (span.innerHTML == " ") ? "&nbsp" : span.innerHTML;
        span.innerHTML = trueKey(event.key);
    });
}