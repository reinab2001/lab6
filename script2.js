        
    var person = prompt("Please enter your name", "Name Here");
        if (person != null) {
          document.getElementById("welcome").innerHTML ="Welcome " + person;
        }
        const answers=[]; 
function calculate(num){

        var a = document.getElementById("inputA").value;
        var b = document.getElementById("inputB").value;
        var result;
        let x=Number(a);
        let y=Number(b);
    
        if (num.id == "add"){
            result= x+y;
            answers.push(result);
        } else if(num.id == "subtract"){
            if(x>y){
                result= x-y;
            } else{
                result= y-x;
            }
            answers.push(result);
        } else if(num.id== "multiply"){
            result=x*y;
            answers.push(result);
        } else if(num.id== "divide"){
            result=x/y;
            answers.push(result);
        }
        document.getElementById("answer").innerHTML = result;
        
}
function printArray(){
    //var results;
    //for(var i;i<answers.length;i++){
      // results=results+" "+answers[i];
    //}
    console.log(answers.toString());
    document.getElementById("answers").innerHTML = answers.toString();

}