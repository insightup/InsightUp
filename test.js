document.getElementById("testResultsButton").addEventListener("click",function(){
    location.href = "testResults.html";
});

function main(){
    try{
    var answers = []
    var url = window.location.toString();
    var urlList = url.split("/");
    var importantElement = urlList[urlList.length-1];
    var indivList = importantElement.split("&");
    for (let i=0;i<indivList.length;i++){
        answers.push(indivList[i].split("=")[1]);
    }
    var answers2 = [];
    for (let i=0;i<answers.length;i++){
        answers2.push(answers[i].split("+").join(" "));
    }
    for (let i=0;i<answers2.length;i++){
        localStorage.setItem("answer"+(i+1).toString(),answers2[i]);
    }
    localStorage.setItem("answerLen",answers2.length);
    for (let i=0;i<3;i++){
        document.getElementById("a"+(i+1).toString()).innerHTML=localStorage.getItem("answer"+(i+1).toString());
    }
    }catch(e){   
    for (let i=0;i<3;i++){
        document.getElementById("a"+(i+1).toString()).innerHTML=localStorage.getItem("answer"+(i+1).toString());
    }
}
}

function textToHex(text){
    var result = []
    if (text!=null){
    for (i=0;i<text.length;i++){
        result.push(text.charCodeAt(i).toString(16));
    }
    }
    return result.join("");
}
function hexToText(hex){
    var result = [];
    for (i=0;i<hex.length;i+=2){
        result.push(String.fromCharCode(parseInt(hex[i]+hex[i+1],16)));
    }
    return result.join("")
}