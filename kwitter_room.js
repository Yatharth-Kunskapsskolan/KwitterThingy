import { initializeApp } from "firebase/app";

const firebaseConfig = {
      apiKey: "AIzaSyAgXOjsPFEDqtAmZueNNpxuNtdiUOBUv4M",
      authDomain: "bruhanotherone-9d155.firebaseapp.com",
      projectId: "bruhanotherone-9d155",
      storageBucket: "bruhanotherone-9d155.appspot.com",
      messagingSenderId: "33354427037",
      appId: "1:33354427037:web:a5faa3b66d430bdffc4274"
    };
    
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name - " + Room_names);
      row = "<div class='room_name' id="+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});
getData();
}

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name..."
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";

      
}


function redirectToRoomName(name)
      {
            console.log(name);
            localStorage.setItem("room_name", name);
            window.location = "kwitter_page.html";
      }

      function logout() {
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location = "kwitter.html";
      }

      function send()
      {
            msg = document.getElememntById("msg").value;
            firebase.database().ref(room_name).push({
                  name:user_name,
                  message:msg,
                  like:0
            });

            document.getElementById("msg").value = "";
      }