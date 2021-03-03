var gallery = 1;
var thing = "";
var an = "";
var s = true;
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
  if (document.getElementById("username").value.length < 4 || document.getElementById("username").value.length > 8) {
    document.getElementById("inputError").textContent = "Please follow username guidelines";
  }
  else if (document.getElementById("password").value.length < 8) {
    document.getElementById("inputError").textContent = "Please follow password guidelines";
  } else {
    db.addData(document.getElementById("username").value, document.getElementById("password").value);
    thing = document.getElementById("username").value;
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
var logWeight = function () {
  var e = document.getElementById("weight")
  var i = document.getElementById("heighti")
  var f = document.getElementById("heightf")
  if (!e.value || !i.value || !f.value) {
    document.getElementById("wError").style.display = "block";
    return;
  } else {
    document.getElementById("wError").style.display = "none";
  }
  f.style.display = "none";
  i.style.display = "none";
  e.style.display = "none";
  var foot = parseInt(f.value);
  var place = 10;
  foot *= 12;
  var inch = parseInt(i.value);
  document.getElementById("sWeight").style.display = "none";
  var tHeight = Math.floor(((703 * e.value) / ((foot + inch) * (foot + inch))) * place) / place;
  console.log((foot) + i.value);
  if (tHeight < 18.5) {
    an = "Underweight.";
  } else if (tHeight > 25 && tHeight < 30) {
    an = "Overweight. Operatio is made to help you plan when to exercise and get it done without wasting your time.";
  } else if (tHeight >= 30) {
    an = "Obese. Operatio is made to help you plan when to exercise and get it done without wasting your time.";
  } else {
    an = "at a healthy weight.";
  }
  document.getElementById("test").innerText = "Your BMI is " + tHeight + " and you are " + an;
}
/*
var secure = function () {
	if(s){
		document.body.innerHTML = "<a href = '/Secure/index.html' id = 'u'>goto</a>";
		document.getElementById("u").click();
		s = false;
	}
}

var check = function() {
	if(document.getElementById('t').value == 'TempPass'){
		document.body.innerHTML = "<a href = '/index.html' id = 'ui'>goto</a>";
		document.getElementById("ui").click();
		s = false;
	}
}
*/
window.scroll({
  top: 2500, 
  left: 0, 
  behavior: 'smooth'
});