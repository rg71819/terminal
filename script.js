document.addEventListener("keyup", function(event){
    var cmd=document.getElementById('cmd').value;
    if(event.code=='Enter' && cmd != ""){
        switch(cmd){
            case "whoami":
                whoami(cmd);
                break;
            default:
                invalid(cmd);
                break;
        }
    }
})

function makeParagraph(cmd){
    var p=document.createElement("p");
    var span=document.createElement("span");
    var text=document.createTextNode("root@Ravi:~# ");
    span.appendChild(text) 
    span.setAttribute("style","color : red; font-weight : bold");
    p.appendChild(span);   
    text=document.createTextNode(cmd);
    p.appendChild(text);
    p.setAttribute("style","color : white; font-weight : bold");
    return p;
}

function whoami(cmd){
    var h1=document.createElement("h1");
    var p=makeParagraph(cmd);
    document.getElementById("cmdOutput").appendChild(p);
    var br=document.createElement("br");
    var text=document.createTextNode("Hello, Friend.");
    h1.appendChild(text);
    h1.appendChild(br);
    text=document.createTextNode("I'm Ravi Shankar");
    h1.appendChild(text);
    document.getElementById("cmdOutput").appendChild(h1);
}

function invalid(cmd){
    var p=makeParagraph(cmd);
    var text=document.createTextNode("invalid command");
    p.appendChild(text);
    document.getElementById("cmdOutput").appendChild(p);
}