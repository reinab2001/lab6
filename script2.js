        
    var person = prompt("Please enter your name", "Name Here");
        if (person != null) {
          document.getElementById("welcome").innerHTML ="Welcome " + person;
        }

function calculate(num){

        var a = document.getElementById("inputA").value;
        var b = document.getElementById("inputB").value;
        var result;
        let x=Number(a);
        let y=Number(b);
    
        if (num.id == "add"){
            result= x+y;
        } else if(num.id == "subtract"){
            if(x>y){
                result= x-y;
            } else{
                result= y-x;
            }
        } else if(num.id== "multiply"){
            result=x*y;
        } else if(num.id== "divide"){
            result=x/y;
        }
        document.getElementById("answer").innerHTML = result;
        
}