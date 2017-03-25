function updateInput(){
  var e = document.getElementById("choose-room");
  var roomSelected = e.options[e.selectedIndex].value;

  document.getElementById("roomInput").value=roomSelected;
}

updateInput();
