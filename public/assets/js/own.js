function myFunction(){
	var x=document.getElementById("login");
	var text="";
	var i;
	for(i=0;i<x.length;i++){
		text+=x.elements[i].value+"<br>";
	}
	document.getElementById("demo").innerHTML=text;
	
var userd={"username":x.elements[0], "rest":"hello"};
var userdstring=JSON.stringify(userd);

var fs=require('fs');
fs.writeFile("file1.json", userdstring);

}

