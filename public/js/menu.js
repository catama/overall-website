
function menuDrop() {
  var x = document.getElementById("myLinks");
  var y = document.getElementById("hamburgerIcon");
  var z = document.getElementsByClassName("topnav")[0];
  if (x.style.display === "block") {
    x.style.display = "none";
    z.style.height= "60px";
    y.classList.remove("fa-chevron-up");
    y.classList.add("fa-chevron-down");
    document.body.style.backgroundColor="#fff4e4";
    
    
  } else {
    x.style.display = "block";
    z.style.height = "100%";
    y.classList.remove("fa-chevron-down");
    y.classList.add("fa-chevron-up");
    document.body.style.backgroundColor="#d7cfc2";
  
  }
}
