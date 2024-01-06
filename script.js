
  


  var inputname=document.getElementById("name");
  var inputemail=document.getElementById("email2");
  var inputpass=document.getElementById("pass2");
 
 var error=document.getElementById("error");
 
  
 
  var inputemail1=document.getElementById("email");
  
  var inputpass1=document.getElementById("pass");
 
  var arr=[];
 
 
 
 
 
  function signup(){
   document.getElementById("invalid").innerHTML="";
   document.getElementById("par").innerHTML="";
 if(validationemail()&&validationpassward()==true){
   if((localStorage.getItem("user")!=null)){
 
     for(var i=0;i<arr.length;i++){
       if(arr[i].email==inputemail.value){
   document.getElementById("par").innerHTML="email already exists";
   return;
       }
     }
  arr=JSON.parse(localStorage.getItem("user"));
     user={
   
       name:inputname.value,
        email:inputemail.value,
       pass:inputpass.value
       
       }
       arr.push(user);
       localStorage.setItem("user", JSON.stringify(arr)); 
 
 
       document.getElementById("invalid").innerHTML="sucess";
       clear();
     
    
   }
   else{
   
     user={
   
       name:inputname.value,
        email:inputemail.value,
       pass:inputpass.value
       
       }
       arr.push(user);
       localStorage.setItem("user", JSON.stringify(arr)); 
       
       document.getElementById("invalid").innerHTML="sucess";
 
       clear();
        }
       }
 
 
 }
 
 
 
 
 
 
 
 
 
 function validationemail(){
   var regex =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
   if(regex.test(inputemail.value)==true){
     return true;
   }
   else{
     document.getElementById("invalid").innerHTML=" in valid  email example:user@example.com";
   }
 
 
  }
 
  function validationpassward(){
  var regex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
  if(regex.test(inputpass.value)==true){
   return true;
 }
 else{
   document.getElementById("invalid").innerHTML=" in valid passward example Tesg193!";
 }
  
 }
 
 
  function login(){
 
 
   document.getElementById("error").innerHTML="";
   arr= JSON.parse(localStorage.getItem("user"));
    for(var i=0;i<arr.length;i++){
  
  
  if(arr[i].email==inputemail1.value&&arr[i].pass==inputpass1.value){
   localStorage.setItem("log", JSON.stringify(arr[i])); 
  location.assign("home.html");
 
  
  }
  
   else{
    document.getElementById("error").innerHTML="invalid email or password ";
 
   
   }
  
  
  }
  
  
   }
 
   function clear(){
     inputname.value="";
     inputemail.value="";
     inputpass.value="";
   }

 
 var x=document.querySelector("#d");
 var form1=document.querySelector(".form1");
 var form2=document.querySelector(".form2");
 var y=document.querySelector("#in");
 
 
 var btnlog=document.querySelector(".login");
 var btnsinup=document.querySelector(".sinup");
 x.addEventListener("click",function(){
   form1.classList.add("d-none");
   form2.classList.remove("d-none");
 
 });
 
 
 
 y.addEventListener("click",function(){
   form2.classList.add("d-none");
   form1.classList.remove("d-none");
 
 });
 
 btnlog.addEventListener("click",function(){
   login();
 
 });
 
 btnsinup.addEventListener("click",function(){
   signup();
 
 });
 
 
 function forgottenPassword(){
        
      document.getElementById('forgottenPassword').innerHTML= `
      <p class="my-3 shadow p-4 text-danger ">
      we are working on <br> activating this feature now relax and <br> try to remember your password
  </p>
      
      `
  
  
  
  }
  
  
  
  var forgot=document.getElementById('forgot');
  forgot.addEventListener('click',forgottenPassword)
  
  
 