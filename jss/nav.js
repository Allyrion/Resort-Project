function myFunction() {
  var x = document.getElementById("nav-test");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}