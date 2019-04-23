// controversial adjustment for the <h1>

let titleAdjuster = () => {
  var size = window.innerWidth;
  var emsize = 0.9 + size / 690;
  // weird linear function so we get a number that works as a font size.
  document.getElementById("logo").style.fontSize = `${emsize}em`;
  // same technique to adjust the width of the white background below the title.
  var vport = 20 + 26700 / size;
  if (vport > 80) vport = 80;
  else if (vport < 40) vport = 40;
  document.getElementById("logo").style.width = `${vport}vw`;
};

window.addEventListener("resize", function() {
  titleAdjuster();
});

titleAdjuster(); // run it once initially

var body = document.getElementById("body");
var email = document.getElementById("email");
var name = document.getElementById("name");

// JS for the gallery
let thumbs = document.getElementsByClassName("mainflex")[0].getElementsByClassName("gallery")[0].getElementsByTagName("img");
let preview = document.getElementById("prev");

let url = "https://raw.githubusercontent.com/lukepchr/lukepchr.github.io/master/images/gallery/_1225.jpg";
preview.style.backgroundImage = `url(${url})`;

// add a "click" event listener to each thumbnail

for (let i = 0; i < thumbs.length; i++) {
  thumbs[i].addEventListener("click", function() {
    let url = thumbs[i].src;
    preview.style.backgroundImage = `url(${url})`;
  });
}
