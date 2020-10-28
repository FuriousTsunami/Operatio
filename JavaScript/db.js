firebase.firestore().settings({
  cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
});

firebase.firestore().enablePersistence()
  
db.collection("users").onSnapshot((snapshot) => {
  //console.log(snapshot.docChanges());
  snapshot.docChanges().forEach(change => {
    if (change.type === "added"){
    }
  })
});
function addData(username, password){
  db.collection("users").doc(username).set({
    Username: username,
    Password: password,
  })
  .then(function() {
    console.log("Document successfully written!");
  })
  .catch(function(error) {
    console.error("Error writing document: ", error);
  });
}
// Function to submit user data
function submit(){
  if (document.getElementById("username").value.length < 4 || document.getElementById("username").value.length > 8){
    document.getElementById("inputError").textContent = "Please follow username guidelines";
  }
  else if(document.getElementById("password").value.length < 8){
    document.getElementById("inputError").textContent = "Please follow password guidelines";
  }else{
    addData(document.getElementById("username").value, document.getElementById("password").value);
    unHide();
  }
}
function unHide(){
  document.getElementById("inputError").style.display = "none";
  document.getElementById("username").style.display = "none";
  document.getElementById("password").style.display = "none";
  document.getElementById("hide").style.display = "block";
  document.getElementById("cancel").style.display = "none";
  document.getElementById("submit").style.display = "none";
  document.getElementById("usernameLabel").style.display = "none";
  document.getElementById("passwordLabel").style.display = "none";
  document.getElementById("success").style.display = "block";
          
}
function logHours(){
  document.getElementById("hours").style.display = "none";
  document.getElementById("hoursLabel").style.display = "none";
  document.getElementById("submitHours").style.display = "none";
  document.getElementById("cancelHours").style.display = "none";
  document.getElementById("success").style.display = "block";
  document.getElementById("hide").style.display = "block";
}
