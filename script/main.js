(function() {
  //var theImages = document.querySelectorAll(".image-holder"),
    //theHeading = document.querySelector(".heading"),
    //theSubhead = document.querySelector(".main-copy h2"),
    //theSeasonText = document.querySelector(".main-copy p"),
    //appliedClass;

var $theImages = $('.image-holder'),
    $theHeading = $('.heading'),
    $theSubhead = $('.main-copy h2'),
    $theSeasonText = $('.main-copy p'),
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
  $theHeading.removeClass(appliedClass);
  $theSubhead.removeClass(appliedClass); // if it is removed first, no matter what, it just changes itself everytime.
  $appliedClass = event.currentTarget.id;

  $theHeading.addClass(appliedClass);
  $theSubhead.addClass(appliedClass);

  $theSubhead.text(dynamicContent[event.currentTarget.id].headline); //firstchild.nodevalue is telling it to sub out text
  $theSeasonText.text(dynamicContent[event.currentTarget.id].text); //dynamicContent is the variable declared in the other JS file with the objects/text to sub in and out
}

$theImages.click(function() {
  console.log('clicked');
  changeElements();
});

//[].forEach.call(theImages, function(image) {
  //image.addEventListener("click", changeElements, true);
//}); //the brackets represent an array. This is telling it to do something when each image is clicked.

//window.addEventListener("load",basic,false);
$theSubhead.text(dynamicContent["spring"].headline); //firstchild.nodevalue is telling it to sub out text
$theSeasonText.text(dynamicContent["spring"].text);
$theHeading.addClass("spring");

})(); //Self-containing function. Writing it inside this prevents ability to access.Also makes it run asap.
