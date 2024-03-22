const storageList=["firstName","lastName","zip","answer1","answer2","answer3"];

document.getElementById("logout").addEventListener("click",function(){
    localStorage.clear();
    document.getElementById("keyOutput").innerHTML="";
});

document.getElementById("copy").addEventListener("click",function(){
    var keyText = localStorage.getItem("key");
    navigator.clipboard.writeText(keyText);
});

function keyEnter(){
    localStorage.clear();
    var key = document.getElementById("key").value;
    keyList = key.split("/");
    for (let i=0;i<keyList.length;i++){
        localStorage.setItem(storageList[i],hexToText(keyList[i]));
    }
    localStorage.setItem("key",key);
}

function infoEnter(){
    var result = [];
    var firstName = document.getElementById("firstName").value;
    localStorage.setItem("firstName",firstName);
    var lastName = document.getElementById("lastName").value;
    localStorage.setItem("lastName",lastName);
    var zipCode = document.getElementById("zip").value;
    localStorage.setItem("zip",zipCode);
    updateKey();
}

function hexToText(hex){
    var result = [];
    for (i=0;i<hex.length;i+=2){
        result.push(String.fromCharCode(parseInt(hex[i]+hex[i+1],16)));
    }
    return result.join("")
}

function textToHex(text){
    var result = []
    if(text!=""){
    for (i=0;i<text.length;i++){
        result.push(text.charCodeAt(i).toString(16));
    }
    }
    return result.join("");
}

function launch(){
    var key = ""
    if (localStorage.getItem("key")!=null){
        updateKey();
        key = localStorage.getItem("key");
        document.getElementById("keyOutput").innerHTML="Your Login Key Is: "+key;
    }
}