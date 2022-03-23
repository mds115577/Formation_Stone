


function ValidateForm(){
    let x= document.forms["myform"]["yname"].value;
    if(x==""){
        alert("Please Enter your name");
        return false;
    }else{
        if(x.length < 4 || x.length > 25){
            alert("Name must be in between 4 & 25 characters");
            return false;
        }
    }
    
    
    let y=document.forms["myform"]["ymail"].value;
    if(y==""){
        alert("Enter your mail");
        return false;
    }

    var z=document.myform.ymail.value;  
var atposition=z.indexOf("@");  
var dotposition=z.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=z.length){  
  alert("Please enter a valid e-mail address");  
  return false;  
  } 
}

