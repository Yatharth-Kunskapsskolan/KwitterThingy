function Redirect1() {
    username = document.getElementById("UserID").value;

    localStorage.setItem("Username", username);

    window.location = "kwitter_room.html";
}