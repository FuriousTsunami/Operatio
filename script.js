//Define And Append HTML5 Canvas
var canvas = document.createElement("CANVAS");
document.body.appendChild(canvas);
//Define CTX And Set Canvas Width/Height
var ctx = canvas.getContext("2d");
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;
//Variables
var menu = {
 x: 0,
 y: 0,
 width: 0,
 height: window.innerHeight,
};
var data = {
  username: 0,
  password: 0,
}
var textX = -100;
var color = "black";
var loop = setInterval(draw, interval);
var interval = 1;
var pixelWidth = window.innerWidth / screen.width;
var pixelHeight = window.innerHeight / screen.height;
var username = "Sign In";
var thing = 100;
var xthingy = 0;
var signinwidth = 0;
var usernamePrompt;
var passwordPrompt;
var favorite = 0;
//Functions
function requirements(){
 scrollTo(10, 10);
 ctx.fillStyle = "white";
 ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
 ctx.fillStyle = "#000080";
 pixelWidth = screen.width / window.innerWidth;
 pixelHeight = screen.height / window.innerHeight;
}
function checkMenu(event) {
 xCoordinate = event.clientX;
 yCoordinate = event.clientY;
 if(xCoordinate <= (38) && yCoordinate <= (38)){
   menu.width = 200;
   if(menu.width >= 200){
     menu.width = 200;
     color = "white";
     textX = 55;
   }
 }
 else if(xCoordinate > (200)){
   menu.width = 0;
   if(menu.width <= 0){
     menu.width = 0;
     color = "black";
     textX = -100;
   }
 }
}
function checkFavoritesClick(event){
  xCoordinate = event.clientX;
  yCoordinate = event.clientY;
  if (xCoordinate >= 55 && xCoordinate <= 137.24609375 && yCoordinate >= 80 && menu.width > 0 && yCoordinate <= 100){
    Favorite();
  }
}
function checkExploreClick(event){
  xCoordinate = event.clientX;
  yCoordinate = event.clientY;
  if (xCoordinate >= 55 && xCoordinate <= 137.24609375 && yCoordinate >= 130 && menu.width > 0 && yCoordinate <= 150){
    console.log("Go to Explore");
  }
}
function checkSettingsClick(event){
  xCoordinate = event.clientX;
  yCoordinate = event.clientY;
  if (xCoordinate >= 55 && xCoordinate <= 137.24609375 && yCoordinate >= 180 && menu.width > 0 && yCoordinate <= 200){
    console.log("Go to Settings");
  } 
}
function checkHomeClick(event){
  xCoordinate = event.clientX;
  yCoordinate = event.clientY;
  if (xCoordinate >= 55 && xCoordinate <= 137.24609375 && yCoordinate >= 230 && menu.width > 0 && yCoordinate <= 250){
    favorite = 0;
  } 
}
CanvasRenderingContext2D.prototype.roundedRectangle = function(x, y, width, height, rounded) {
  const radiansInCircle = 2 * Math.PI
  const halfRadians = (2 * Math.PI)/2
  const quarterRadians = (2 * Math.PI)/4  
  
  // top left arc
  this.arc(rounded + x, rounded + y, rounded, -quarterRadians, halfRadians, true)
  
  // line from top left to bottom left
  this.lineTo(x, y + height - rounded)

  // bottom left arc  
  this.arc(rounded + x, height - rounded + y, rounded, halfRadians, quarterRadians, true)  
  
  // line from bottom left to bottom right
  this.lineTo(x + width - rounded, y + height)

  // bottom right arc
  this.arc(x + width - rounded, y + height - rounded, rounded, quarterRadians, 0, true)  
  
  // line from bottom right to top right
  this.lineTo(x + width, y + rounded)  

  // top right arc
  this.arc(x + width - rounded, y + rounded, rounded, 0, -quarterRadians, true)  
  
  // line from top right to top left
  this.lineTo(x + rounded, y)  
}
function clamp(a, left, right){
  if(a < left || a > right){
    return a;
  } else if (a >= left){
    return left;
  } else {
    return right;
  }
}
function checkSignInClick(event){
  xCoordinate = event.clientX; 
  yCoordinate = event.clientY;
  if (xCoordinate >= window.innerWidth - 120 && xCoordinate <= window.innerWidth - 20 && yCoordinate >= 20 && yCoordinate <= 60){ 
    SignInScreen();
  } 
}
async function SignInScreen(){
  usernamePrompt = await swal("Please enter new username (Less than 9 characters and more than 3 characters):", {
  title: "Username",
  content: "input",
  buttons: {
    cancel: "Cancel",
    confirm: "OK",
  },
  });
  if (usernamePrompt == null || usernamePrompt == undefined){
    return;
  }
  if (usernamePrompt == "    " || usernamePrompt == "     " || usernamePrompt == "      " || usernamePrompt == "       " || usernamePrompt == "        "){
    usernamePrompt = "Unnamed";
  }
  if (usernamePrompt.length > 9 || usernamePrompt.length < 3){
    swal({
      title: "Oh no!",
      text: "Please enter a username less than 9 characters and more than 3 characters.",
      icon: "error",
    })
    return;
  }
  data.username = usernamePrompt;
  username = usernamePrompt;
  passwordPrompt = await swal("Please enter new password (More than 7 characters):", {
  title: "Password",
  content: "input",
  buttons: {
    cancel: "Cancel",
    confirm: "OK",
  },
  });
  if (passwordPrompt == null || passwordPrompt == undefined){
    return;
  }
  if (passwordPrompt.length < 7){
    let tempPassword = getRndInteger(10000000, 99999999);
    passwordPrompt = "" + tempPassword
      await swal({
        title: "Oh no!",
        text: "Your password must be more than 7 characters. Your new password is: \n" + passwordPrompt,
        icon: "error",
      })
  }
  await swal({
    title: "Success!",
    icon: "success",
  })
  data.password = passwordPrompt;
  console.log("Username: " + data.username);
  console.log("Password: " + data.password);
}
function Favorite(){
  favorite = 90;
}
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
//Draw
function draw(){
 requirements();
 ctx.fillStyle = "black";
  ctx.fillText("Operatio", window.innerWidth/2 - 37, window.innerHeight/4);
 ctx.fillText("This is where we will put our homepage.", window.innerWidth/2 - 150, window.innerHeight/2);
 ctx.fillStyle = "#000080";
 for(var e = 0; e <= Math.round(window.innerWidth/120); e++){
  ctx.fillRect((e*100) + 20, 100, favorite, 100);
 }
 ctx.fillStyle = "#000080";
 ctx.fillRect(menu.x, menu.y, menu.width, menu.height);
 ctx.fillStyle = "black"
 ctx.strokeStyle = color;
 ctx.moveTo(13, 15);
 ctx.lineTo(38, 15);
 ctx.stroke();
 ctx.moveTo(13, 25);
 ctx.lineTo(38, 25);
 ctx.stroke();
 ctx.moveTo(13, 35);
 ctx.lineTo(38, 35);
 ctx.stroke();
 ctx.fillStyle = "white";
 ctx.font = "20px serif";
 ctx.fillText("Favorites", textX, 100);
 ctx.fillText("Explore", textX, 150);
 ctx.fillText("Settings", textX, 200);
 ctx.fillText("Home", textX, 250);
 ctx.fillStyle = "black";
 ctx.fillText(username, window.innerWidth -  thing - xthingy, 50)
 ctx.fillStyle = "#000080";
}
//Event Handlers
document.addEventListener("mousemove", checkMenu);
document.addEventListener("click", checkFavoritesClick);
document.addEventListener("click", checkExploreClick);
document.addEventListener("click", checkSettingsClick);
document.addEventListener("click", checkHomeClick);
document.addEventListener("click", checkSignInClick);
