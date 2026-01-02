function Test() {
  // Get the modal
var id_select_apt = document.getElementById("id_select_apt");

// Get the button that opens the modal
var id_select_apt_button = document.getElementById("id_select_apt_button_1");

// Get the <span> element that closes the modal
var select_apt_close = document.getElementsByClassName("select_apt_close")[0];

// When the user clicks the button, open the modal 
id_select_apt_button.onclick = function() {
  id_select_apt.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
select_apt_close.onclick = function() {
  id_select_apt.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == id_select_apt) {
    id_select_apt.style.display = "none";
  }
}
}
