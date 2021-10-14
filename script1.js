var person = prompt("Please enter your name", "Name Here");
if (person != null) {
  document.getElementById("welcome").innerHTML ="Welcome " + person;
}
    const answers=[];    
    function add(){
        var a = document.getElementById("inputA").value;
        var b = document.getElementById("inputB").value;
        var result;
        let x=Number(a);
        let y=Number(b);
        result= x+y;
        document.getElementById("answer").innerHTML = result;
        answers.push(result);
    }
    function subtract(){
        var a = document.getElementById("inputA").value;
        var b = document.getElementById("inputB").value;
        var result;
        let x=Number(a);
        let y=Number(b);
        if(x>y){
            result= x-y;
        } else{
            result= y-x;
        }
        document.getElementById("answer").innerHTML = result;
        answers.push(result);
    }
    function multiply(){
        var a = document.getElementById("inputA").value;
        var b = document.getElementById("inputB").value;
        var result;
        let x=Number(a);
        let y=Number(b);
        result=x*y;
        document.getElementById("answer").innerHTML = result;
        answers.push(result);
    }
    function divide(){
        var a = document.getElementById("inputA").value;
        var b = document.getElementById("inputB").value;
        var result;
        let x=Number(a);
        let y=Number(b);
        result=x/y;
        document.getElementById("answer").innerHTML = result;
        answers.push(result);
    }
    function printArray(){
        //var results;
        //for(var i;i<answers.length;i++){
          // results=results+" "+answers[i];
        //}
        console.log(answers.toString());
        document.getElementById("answers").innerHTML = answers.toString();

    }
 
      
    
