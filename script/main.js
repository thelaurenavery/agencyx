(function() {
  var theImages = document.querySelectorAll(".image-holder"),
  theHeading = document.querySelector(".heading"),
  theSubhead = document.querySelector(".main-copy h2"),
  theSeasonText = document.querySelector(".main-copy p"),
  appliedClass;

//function basic() {
  //console.log("basic loaded");
  //theHeading.classList.add("spring");
  //theSubhead.classList.add("spring");

  //theSubhead.firstChild.nodeValue = dynamicContent["spring"].headline; //firstchild.nodevalue is telling it to sub out text
  //theSeasonText.firstChild.nodeValue = dynamicContent["spring"].text;
//}

function changeElements() {
//debugger; //this automatically triggers the script folder to open
  theHeading.classList.remove(appliedClass);
  theSubhead.classList.remove(appliedClass); // if it is removed first, no matter what, it just changes itself everytime.
  appliedClass = this.id;

  theHeading.classList.add(this.id);
  theSubhead.classList.add(this.id);

  theSubhead.firstChild.nodeValue = dynamicContent[this.id].headline; //firstchild.nodevalue is telling it to sub out text
  theSeasonText.firstChild.nodeValue = dynamicContent[this.id].text; //dynamicContent is the variable declared in the other JS file with the objects/text to sub in and out
}

[].forEach.call(theImages, function(image) {
  image.addEventListener("click", changeElements, true);
}); //the brackets represent an array. This is telling it to do something when each image is clicked.

//window.addEventListener("load",basic,false);
theSubhead.firstChild.nodeValue = dynamicContent["spring"].headline; //firstchild.nodevalue is telling it to sub out text
theSeasonText.firstChild.nodeValue = dynamicContent["spring"].text;
theHeading.classList.add("spring"); 

})(); //Self-containing function. Writing it inside this prevents ability to access.Also makes it run asap.
