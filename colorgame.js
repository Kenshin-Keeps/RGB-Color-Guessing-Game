var numberofcolors = 6;
var colors= RandomlyGenerateColor(numberofcolors);
var messagedisplay = document.querySelector("#msg");
var squares = document.querySelectorAll(".square");
var pickedcolordisplay = document.querySelector("#pickedcolordisplay");
var resetbtn = document.querySelector("#reset");
var easybtn = document.querySelector("#easy");
var hardbtn = document.querySelector("#hard");

var pickedColor = selectcolor();
pickedcolordisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click",function()
	{
		var clickedcolor = this.style.backgroundColor;
		if (clickedcolor === pickedColor) {
			messagedisplay.textContent = "Correct!!!";
			changecolorwhencorrect(pickedColor);
			document.querySelector("h1").style.backgroundColor = pickedColor;
			resetbtn.textContent = "Play Again?";		
		}
		else
		{
			this.style.backgroundColor = "#232323";
			messagedisplay.textContent = "Try Again!";
		}
	});
}

resetbtn.addEventListener("click",function()
{
	colors= RandomlyGenerateColor(numberofcolors);
	pickedColor = selectcolor();
	pickedcolordisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	document.querySelector("h1").style.backgroundColor = "#232323";
	messagedisplay.textContent = "";
	resetbtn.textContent = "New Colors";	
});

easybtn.addEventListener("click",function()
{
	document.querySelector("h1").style.backgroundColor = "#232323";
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	numberofcolors = 3;
	colors= RandomlyGenerateColor(numberofcolors);
	pickedColor = selectcolor();
	pickedcolordisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];	
		}
		else
		{
			squares[i].style.display = "none";
		}
	}
});

hardbtn.addEventListener("click",function()
{
	document.querySelector("h1").style.backgroundColor = "#232323";
	easybtn.classList.remove("selected");
	hardbtn.classList.add("selected");
	numberofcolors = 6;
	colors= RandomlyGenerateColor(numberofcolors);
	pickedColor = selectcolor();
	pickedcolordisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];	
		squares[i].style.display = "block";
	}
});

function changecolorwhencorrect(correctcolor)
{
	for (var i = 0; i < colors.length; i++) {
		squares[i].style.backgroundColor = correctcolor;
	}
}

function selectcolor()
{
	/*var rand = Math.floor(Math.random()*colors.length);*/
	return colors[Math.floor(Math.random()*colors.length)];
}


function RandomlyGenerateColor(colornumber)
{
	var colorarray = [];

	for (var i = 0; i < colornumber; i++) {
		colorarray.push(randomcolor());
	}

	return colorarray;
}

function randomcolor()
{
	var r = Math.floor(Math.random()*255); 
	var g = Math.floor(Math.random()*255); 
	var b = Math.floor(Math.random()*255);

	return "rgb("+ r +", "+ g +", "+ b +")"; 
}