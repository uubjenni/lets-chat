
function addUser() {

  user_name = document.getElementById("user_name").value;

  localStorage.setItem("user_name", user_name);
  
  Password = document.getElementById("Password").value;

  localStorage.setItem("Password", Password);

    window.location = "lets_chat_room.html";
}

