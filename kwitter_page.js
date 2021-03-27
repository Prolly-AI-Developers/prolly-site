var firebaseConfig = {
  apiKey: "AIzaSyDyKtGvlgCYlLMQ-fhzJsZjXtwSKSJdRF0",
  authDomain: "prolly-msg-database.firebaseapp.com",
  databaseURL: "https://prolly-msg-database-default-rtdb.firebaseio.com",
  projectId: "prolly-msg-database",
  storageBucket: "prolly-msg-database.appspot.com",
  messagingSenderId: "650822950702",
  appId: "1:650822950702:web:dcfd9294b0687b2e6ba4bf"
};

firebase.initializeApp(firebaseConfig);


    
	user_name = localStorage.getItem("user_name");
	room_name = localStorage.getItem("room_name");
  user_pass = localStorage.getItem("user_password");
  email = localStorage.getItem("email");


  document.getElementById("room_name_display").innerHTML = room_name;
  document.getElementById("username_display").innerHTML = user_name;
  document.getElementById("userpass_display").innerHTML = email;

function send()
{
  msg = document.getElementById("msg").value;
  if(msg == "")
  {
    document.getElementById("msg").placeholder="Write your message here..."
  }else{
    firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      email:email,
      password:user_pass
     });
  
    document.getElementById("msg").value = "";
  };
}

function getData() {
  firebase.database().ref("/"+room_name).on('value', function(snapshot) {
      document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {
       childKey  = childSnapshot.key;
       childData = childSnapshot.val();
       if(childKey != "purpose")
       {
         firebase_message_id = childKey;
         message_data = childData;

	       console.log(message_data);
	       name = message_data['name'];
	       message = message_data['message'];
         email = message_data['email'];
         row = "<h4 title='"+ name_verified +"'><img class='user_profile' src='https://img.icons8.com/color/48/000000/circled-user-male-skin-type-7--v2.png'> "+ name +"</h4><h4 type='text' class='message_h4'><img class='user_profile' src='msg.gif'/> :    "+ message +"</h4><h5 title='Private Message'><img class='user_tick' src='https://img.icons8.com/material-two-tone/24/4a90e2/privacy.png'/> No Anyone Access Your Room Without Your Room Name<hr>";       
         document.getElementById("output").innerHTML += row;
       };
    });
  });
}

name_verified = user_name;

getData();

function video()
{
  window.location = "login.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("kwitter.html");
}

var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loading").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}