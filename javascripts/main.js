
var picArray = [
{image: './images/0_waitLongEnough.jpg'},
{image: './images/1_blazingSun.jpg'},
];


// as external links
// images:[
// {<a href="#"><img src="img/img01.jpg"/></a>},
// {<a href="#"><img src="img/img02.jpg"/></a>},
// ]


console.log("picArray :: ", picArray);
//***************************************************
// event listener for <Print Array> button
//***************************************************
$("#print").click(function (){

  $("#print").addClass("hidden");

  writeToDOM();
});


function writeToDOM () {

var imageString = "";
 
  for (var i=0; i<picArray.length; i++) {
    imageString += `<div class="imageContainer" id="image$(i)">`;
    imageString += `<div class="eachimage">`;
    imageString += `<img class="thisImage" src="${picArray[i].image}">`;
    imageString += `</div></div>`;
  }
  $(".container").append(imageString);
}



