function clr(){
    document.getElementById("output").value = 0;
    document.getElementById("output").innerHTML = "0";
}

function display(input){
     if(document.getElementById("output").innerHTML === "0"){
        document.getElementById("output").innerHTML = "";
     }
    document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + input;
    document.getElementById("output").value = document.getElementById("output").value + input;
    console.log(document.getElementById("output").value);
};

function calculate(){
    var p = document.getElementById("output").innerHTML;
    console.log(p);
    var q = eval(p);
    console.log(q);
    document.getElementById("output").value = q;
    document.getElementById("output").innerHTML = q;
};