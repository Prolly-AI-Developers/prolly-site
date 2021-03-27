function login()
{
   
    user_name=document.getElementById("user_name").value;

   if(user_name==""){
     document.getElementById("user_name").placeholder="cannot login without username";
   }
   else{ 
    localStorage.setItem("user_name",user_name);
    
      window.location = "video-chat-min.html";
  }
}

function gallery()
{
  window.location = "gallery.html";
}

function logOut() {
  window.location.replace("login.html");
  }

var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loading").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

var likeCount = 1;
var like2Count = 1;

function like(){
    document.getElementById("heart").innerHTML = likeCount++;
}

function like_1(){
  document.getElementById("heart_1").innerHTML = like2Count++;
}

n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("demo").innerHTML = m + "/" + d + "/" + y;