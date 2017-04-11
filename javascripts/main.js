
var picArray = [
	{image: './images/0_waitLongEnough.jpg'},
	{image: './images/1_blazingSun.jpg'},
	{image: './images/2_graytonBeachBenPearson.png'},
	{image: './images/3_chartresCathedral.jpg'},
	{image: './images/4_springFlowersRohanNag.png'},
	{image: './images/5_pantatonix.png'},

	{image: './images/6_cowsStaycationQuinnPerkins.png'},

	{image: './images/7_cakeZaiMoini.png'},
	{image: './images/8_baldwinTrump.png'},
	{image: './images/9_moviejournalists.png'},
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

			imageString += `</div>`; // end of row
			imageString += `<div class="row">`;
			colCounter = 0;
		} // colCounter <if> 
	} // <for> loop

	imageString += `</div>`;
	$(".container").append(imageString);
}



