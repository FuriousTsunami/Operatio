var gallery = 1;
var openMenu = function () {
  document.getElementById("menu").style.display = "block";
  document.getElementById("menuOverlay").style.display = "block";
}

var closeMenu = function () {
  document.getElementById("menu").style.display = "none";
  document.getElementById("menuOverlay").style.display = "none";
}

var run = function () {
  document.getElementById("progress").style.display = "none";
  document.getElementById("certificate").style.display = "block";
}
var changeGoal = function () {
  document.getElementById("pBar").value = "100";
  document.getElementById("progressText").textContent = "100%"
  setTimeout(run, 1000);
}
var printElement = function (element) {
  var printHTML = document.getElementByID(element).innerHTML;
  var originalHTML = document.body.innerHTML;
  document.body.innerHTML = printHTML;
  setTimeout(function () {
    document.body.innerHTML = originalHTML;
  }, 1000);
}
var exploreSearch = function () {
  console.log("Searching...");
  var videos = document.getElementsByTagName("video");
  videos.forEach(function (video) {
    video.style.display = "none";
  });
  var space = document.getElementById("space");
  var time = document.getElementById("time");
  var type = document.getElementById("type");
  var difficulty = document.getElementById("difficulty");
  var searchString = space.value + " " + time.value + " " + type.value + " " + difficulty.value;
  var elements = document.getElementsByClassName(searchString);
  elements.forEach(function (element) {
    element.style.display = "block";
  });
}
var submit = function () {
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
var unHide = function () {
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
var logHours = function () {
  document.getElementById("hours").style.display = "none";
  document.getElementById("hoursLabel").style.display = "none";
  document.getElementById("submitHours").style.display = "none";
  document.getElementById("cancelHours").style.display = "none";
  document.getElementById("success").style.display = "block";
  document.getElementById("hide").style.display = "block";
}