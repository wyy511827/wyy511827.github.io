let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/cat1.png") {
    myImage.setAttribute("src", "images/cat4.png");
  } else {
    myImage.setAttribute("src", "images/cat1.png");
  }
};
