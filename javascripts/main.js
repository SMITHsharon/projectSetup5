
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

	var imageString = `<div class="row align-items-start" id="image$(i)">`;
	var colCounter = 0;

	for (var i=0; i<picArray.length; i++) {
	    
	    imageString += `<div class="eachimage col-sm-3 col">`;
	    imageString += `<img class="thisImage" src="${picArray[i].image}">`;
	    imageString += `</div>`;
  
  		colCounter += 1;
			if (colCounter === 3) { /// wraps this row

				tableString += `</div>`; // end of row
				tableString += `<div class="row">`;
				colCounter = 0;
			} // colCounter <if> 
	} // <for> loop

	imageString += `</div>`;
	$(".container").append(imageString);
}



