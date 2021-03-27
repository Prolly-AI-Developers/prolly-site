  function addUser()
{
   
    user_name=document.getElementById("user_name").value;
    user_pass=document.getElementById("user_password").value;
    room_name=document.getElementById("user_room").value;
    email=document.getElementById("email").value;


   if(user_name,user_pass,user_room,email==""){
     document.getElementById("user_name").placeholder="can't login without username";
     document.getElementById("user_password").placeholder="can't login without password";
     document.getElementById("user_room").placeholder="can't login without room name";
     document.getElementById("email").placeholder="can't login without email";
   }
   else{ 
    localStorage.setItem("user_name",user_name);
    localStorage.setItem("room_name",room_name);
    localStorage.setItem("user_password",user_pass);
    localStorage.setItem("email",email);
    
      window.location = "kwitter_page.html";
  }
}

function gallery()
{
  window.location = "gallery.html";
}

var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loading").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}