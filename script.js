let projectNum = 5;

let navLink = document.getElementById('navLink');
let gear = document.getElementById('gear');
let popUpWindow = document.getElementById('popUpWindow');

let popUpArr = [];
let popUpId;

for(let i=0; i<projectNum;i++){
  popUpId = "popUp" + i;
  popUpArr[i] = document.getElementById(popUpId);
  console.log(popUpId);
}

function showMenu(){
  navLink.style.right = "0";
}

function closeMenu(){
  navLink.style.right = "-210px";
}

function cssOff(){
  document.styleSheets[0].disabled = true;
}

function cssOn(){
  document.styleSheets[0].disabled = false;
}

function showPopUp(_index){
  popUpArr[_index].style.display = "block";
  popUpWindow.style.top = window.scrollY +"px";
}

function closePopUp(_index){
  popUpArr[_index].style.display = "none";
}
