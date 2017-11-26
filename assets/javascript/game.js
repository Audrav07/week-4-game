
$(document).ready(function(){

//global variables
var wins = 0;
var losses = 0;
var userTotal = 0; //created a counter to keep track of user's total
var numberOptions = Math.floor(Math.random() * 16) + 5;

 var randomNum = Math.floor(Math.random() * 100 + 10);

$("#number-to-guess").text(randomNum);

//setting up random numbers for each crystal
//create buttons for crystals to take on random  numbers
crystalValue = Math.floor(Math.random() * 16) + 5;


//for loop to create crystals for every numberOption
for(var i = 0; i < numberOptions.length; i++){
	
	//each iteration, we will create an imageCrystal
	var imageCrystal = $("<img>");
	imageCrystal.attr("src", );
	imageCrystal.attr("alt", 'crystals');
	
	//first each crystal will be given the class ".crystal-image"
	imageCrystal.addClass("crystal-image");
	//each crystal image will get added to page

	//each imageCrystal will be given a data attribute called data-crystalValue
	// data attribute will be set equal to the array value

	imageCrystal.attr("data-crystalValue", numberOptions[i]);
	$("#crystals").append(imageCrystal);
}

//set on click event for crystals

$("#crystals").on("click", function (){
	userTotal = userTotal;
	// console.log("new userTotal= " + userTotal);
		$('#finalTotal').text(userTotal);
	


//crystal's value = extract the value from the data attribute
var crystalValue = ($(this).attr("data-crystalValue"));
//$(this) specifies that we should be extracting the crystal value of the clicked crystal
//the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue"
crystalValue = parseInt(crystalValue);

//we add the crystalValue to the user's "counter"
userTotal += numberOptions;

console.log("new score: " + userTotal);


if(userTotal === randomNum){
			wins++;
			reset();
	



} else if(userTotal >= randomNum){
		losses++;
		reset();

	
}



//reset game
function reset(){
	$("#win").text(wins);
	$("#losses").text(losses);
 randomNum = Math.floor(Math.random() * 100 + 10);
	console.log(randomNum);
$("#number-to-guess").text(randomNum);
crystalValue = Math.floor(Math.random() * 16) + 5;
 userTotal = 0;
$('#finalTotal').text(userTotal);
}


})

});









