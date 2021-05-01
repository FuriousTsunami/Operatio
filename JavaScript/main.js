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
};
var changeGoal = function () {
  document.getElementById("certificate").style.display = "block";
  document.getElementById("print").style.display = "none";
  document.getElementById("finishGoal").style.display = "none";
}
var exploreSearch = function () {
  var videos = document.getElementsByTagName("video");
  for (var i = 0; i < videos.length; i++) {
    videos[i].style.display = "none";
  }
  var space = document.getElementById("space");
  var time = document.getElementById("time");
  var type = document.getElementById("type");
  var searchString = space.value + "_" + time.value + "_" + type.value;
  var elements = document.getElementsByClassName(searchString);
  var unHidden = false;
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = "block";
    unHidden = true;
  }
  if (!unHidden) {
    document.getElementById("error").style.display = "block";
  }
  else {
    document.getElementById("error").style.display = "none";
  }
}

var submit = function () {
  if (document.getElementById("username").value.length < 4 || document.getElementById("username").value.length > 8) {
    document.getElementById("inputError").textContent = "Please follow username guidelines";
  }
  else if (document.getElementById("password").value.length < 8) {
    document.getElementById("inputError").textContent = "Please follow password guidelines";
  } else {
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
  document.getElementById("weight").style.display = "none";
  document.getElementById("weightLabel").style.display = "none";
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
  var weight = document.getElementById("weight")
  var inches = document.getElementById("heightInches")
  var feet = document.getElementById("heightFeet")
  if (!weight.value || !inches.value || !feet.value) {
    document.getElementById("wError").style.display = "block";
    return;
  } else {
    document.getElementById("wError").style.display = "none";
  }
  feet.style.display = "none";
  inches.style.display = "none";
  weight.style.display = "none";
  var foot = parseInt(feet.value);
  var place = 10;
  foot *= 12;
  var inch = parseInt(inches.value);
  document.getElementById("sWeight").style.display = "none";
  var BMI = Math.floor(((703 * weight.value) / ((foot + inch) * (foot + inch))) * place) / place;
  var response;
  if (BMI < 18.5) {
    response = "underweight.";
  } else if (BMI > 25 && BMI < 30) {
    response = "overweight."
  } else if (BMI >= 30) {
    response = "obese."
  } else {
    response = "at a healthy weight.";
  }
  document.getElementById("test").innerText = "Your BMI is " + BMI + " and you are " + response;
}
var createChart = function () {
  var ctx = document.getElementById("myChart").getContext("2d");

  ctx.canvas.width = 50;
  ctx.canvas.height = 25;

  var data = [{ x: 0, y: 5 }, { x: 1, y: 1 }];
  // 5 and 1
  var scatterChart = new Chart(ctx, {
    type: "line",
    data: {
      datasets: [{
        label: "Hours Of Actiity",
        data: data,
        backgroundColor: "rgba(244, 67, 54, 0.75)",
      }]
    },
    options: {
      scales: {
        xAxes: [{
          type: "linear",
          position: "bottom",
        }]
      }
    }
  });
}