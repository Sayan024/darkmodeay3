let checkbox = document.getElementById('darkMode');
let bg = document.getElementById('main')
let link = document.getElementsByTagName("a");
let h = document.getElementsByTagName("h1");
let p = document.getElementsByTagName("p");
checkbox.addEventListener('change', function() {
  if (this.checked) {
    bg.style.backgroundColor ="black";
    link[0].style.color = "black";
    link[1].style.color = "black";
    link[2].style.color = "black";
    link[3].style.color = "black";
    h[0].style.color = "black"
    p[0].style.color = "white"
    
  } else {
    bg.style.backgroundColor ="white"
    link[0].style.color = "white";
    link[1].style.color = "white";
    link[2].style.color = "white";
    link[3].style.color = "white";
    h[0].style.color = "yellow"
    p[0].style.color = "blue"
  }
})
