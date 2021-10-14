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
    //array practice
    const array=[ "john", "Jason", "kevin"];
      console.log(array.toString());
      array.unshift("jad");
      console.log(array.toString());
      const array2=[ "manel", "nahla", "sabine","mirna"];
      console.log(array2.toString());
      const array3=array.concat(array2);
      console.log(array3.toString());
      console.log(array3.indexOf("john"));
      console.log(array3.length);
      array3.pop();
      console.log(array3.toString());
      array3.shift();
      console.log(array3.toString());
      array3.push("reina");
      console.log(array3.toString());
      array3.reverse();
      console.log(array3.toString());
      const array4=array3.splice(0,3);
      console.log(array4.toString());
      console.log(array4.includes("sabine"));
      let text="";
      array4.forEach(myFunction);
      console.log(text);
      function myFunction(item, index) {
          text += index + ": " + item+" ";
        }


    
