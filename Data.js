
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA4pMDG3V-Np-nxlcu0K9N-Yr-ZO0GifXM",
    authDomain: "giveaways-b8dac.firebaseapp.com",
    databaseURL: "https://giveaways-b8dac-default-rtdb.firebaseio.com",
    projectId: "giveaways-b8dac",
    storageBucket: "giveaways-b8dac.appspot.com",
    messagingSenderId: "451357476679",
    appId: "1:451357476679:web:790ad3af4672056e74ee62"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


   function addUser(){
       //game
       game_name=document.getElementById("game_name").value;
       firebase.database().ref("/").child(game_name).update({
           purpose: "adding game name"
           
       });

       //rblx

       rblx_name=document.getElementById("rblx_name").value;
       firebase.database().ref("/").child(rblx_name).update({
           purpose: "adding roblos name"
           
       });

       //insta

       insta_name=document.getElementById("insta_name").value;
       firebase.database().ref("/").child(insta_name).update({
           purpose: "adding insta name"
           
       });

       //why

       your_name=document.getElementById("your_name").value;
       firebase.database().ref("/").child(your_name).update({
           purpose: "reason"
           
       });
   }

