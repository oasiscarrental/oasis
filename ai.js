window.addEventListener('load', function(){
//https://unpkg.com/brain.js@1.0.0-rc.9/browser.js    --> new version of the brain.js
var chat = document.getElementById("chatButton");
var no = document.getElementById("noButton");
var yes = document.getElementById("yesButton");
var txt = document.getElementById("textBox");
var confirm = document.getElementById("confirmation");
var help = document.getElementById("helpBox");
var helpBtn = document.getElementById("helpButton");
var trainingArea = document.getElementById("trainArea");
//check the local Storage to see if the user has trained the bot bofore 
//when you teach OASIS new information the array size will be increased and saved
if (localStorage.getItem("bot") == null || undefined) {
var botTalk = [
"Hello! I hope you have a good day!",

"I am fine, thanks!",

"My name is OASIS!",

"42",

"I was created ON 12th March 2020.",

"I am not a human, I am an artificial intelligence chatbot."];
} else {
  botTalk = JSON.parse(localStorage.getItem("bot"));
}

trainingArea.style.display="none";
   help.style.display = "none";
	helpBtn.style.display = "none";

var divArr=[];
var delayVar=0;


if (localStorage.getItem("data") == null || undefined){
//OASIS data is null, then set default 
} else {
  trainData = JSON.parse(localStorage.getItem("data"));  //let's use OASIS new answers 
}

function newDiv(COLOR, TEXT){
var newdiv = document.createElement("div");

newdiv.style.width = "90%";
newdiv.style.height = "10%";
newdiv.style.background = COLOR;
if(COLOR=="green"){
	newdiv.style.left="53%";
}
else{
	newdiv.style.left="47%";
}
newdiv.style.bottom="15%";
newdiv.style.position="fixed";
newdiv.style.borderRadius="10px";
newdiv.style.transform="translate(-50%,0)";
newdiv.style.paddingLeft ="10px";
newdiv.style.paddingTop ="5px";
newdiv.style.fontFamily="Verdana, Times, serif";
newdiv.innerHTML = TEXT;
newdiv.style.border = "1px solid black";
newdiv.style.color="white";
document.body.appendChild(newdiv);

divArr.push(newdiv);

for (y=0;y<divArr.length-1;y++){
	if (divArr[y].style.bottom=="15%"){
	divArr[y].style.bottom="28%";
}
else if (divArr[y].style.bottom=="28%"){
	divArr[y].style.bottom="41%";
}
else if (divArr[y].style.bottom=="41%"){
	divArr[y].style.bottom="54%";
}
else if (divArr[y].style.bottom=="54%"){
	divArr[y].style.bottom="67%";
}
else if (divArr[y].style.bottom=="67%"){
	divArr[y].style.bottom="80%";
}
else if (divArr[y].style.bottom=="80%"){
	divArr[y].style.bottom="93%";
}
else if (divArr[y].style.bottom=="93%"){
	divArr[y].style.bottom="106%";
}
else if(divArr[y].style.bottom=="106%"){
	divArr[y].style.display="none";
}
}


}
/*
newDiv("green","Who are you?");
newDiv("orange","I am a bot.");
*/
//***********Machine learning**************
var net = new brain.NeuralNetwork();
var trainData = [];
var maxLength = 0;
var remainingLength = 0;
var newInput;

//read the new array size in the localStorage and get the value
if (localStorage.getItem("neurons") == undefined || null){
  var commands = 7; // if there's no new value then set default
} else{
commands = localStorage.getItem("neurons");
}

//Greeting
trainData.push({ input: [1,0,0,0,1,1,1,1,0,0,1,0,0,0], output: {[1]: 1} }); //HI
trainData.push({ input: [1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0], output: {[1]: 1} }); //HEY
trainData.push({ input: [1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0], output: {[1]: 1} }); //HELLO
trainData.push({ input: [1,0,1,1,0,0,0,1,0,0,1,1,1,0], output: {[1]: 1} }); //Yo 
																													 
//How are you?
trainData.push({ input: [1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1], output: {[2]: 1} }); //How are you?

trainData.push({ input: [1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1], output: {[2]: 1} }); //Are you ok?

//What is your name?
trainData.push({ input: [1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1], output: {[3]: 1} }); //What is your name?
trainData.push({ input: [1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1], output: {[3]: 1} }); //Whats your name?
trainData.push({ input: [1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1], output: {[3]: 1} }); //Whats ur name?
trainData.push({ input: [1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1], output: {[3]: 1} }); //Your name?
trainData.push({ input: [1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1], output: {[3]: 1} }); //Who are you?
trainData.push({ input: [1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1], output: {[3]: 1} }); //Name?




//check the localStorage to see if the user has taught something to OASIS 
//(Here's the binary data in contrast with the bot data) 
//if true then use the default training data, if false then read the local storage and use the new information.


if (localStorage.getItem("data") == null || undefined){

} else {
  trainData = JSON.parse(localStorage.getItem("data")); 
}

//Commands to fill up the arrays with zeros. All arrays must be of same length
for (j=0;j<trainData.length;j++){
	if (trainData[j].input.length > maxLength){
		maxLength = trainData[j].input.length;
	}
}
for (q=0;q<trainData.length;q++){
	if (trainData[q].input.length < maxLength){
		remainingLength = maxLength - trainData[q].input.length;
		zeroArray = Array(remainingLength).fill(0);
		trainData[q].input = trainData[q].input.concat(zeroArray);
	}
}

//Training

net.train(trainData, {
    iterations: 20000,  //max interactions training 
	log: true,
	logPeriod: 5,
	errorThresh: 0.0005,
});  //Using all the training data to train the AI


//Chat button
chat.addEventListener("click",function(){

/*
var capture = localStorage.getItem("user_data");
if (capture == null || capture == undefined) {
capture = ["a","b"];
localStorage.setItem("user_data",capture);
capture = localStorage.getItem("user_data");
} else {
  var elem = document.getElementById("textBox").value;
  capture.push(elem);
}
*/



if (txt.value != ""){

document.getElementById("user").innerHTML = (txt.value); 

var data = textToBinary(txt.value);

	var result = brain.likely(data, net);

	for (k=1;k<=botTalk.length;k++){

	if (result == k){
		delayVar=k;
		setTimeout(function(){
document.getElementById("chatbot").innerHTML = botTalk[delayVar-1]; 

trainingArea.style.display="inline";
	
},800);
	}

	}
    
   help.style.display = "none";
	helpBtn.style.display = "none";
}
});

yes.addEventListener("click", function(){
	alert("Thank you!");
   	txt.value="";
   help.style.display = "none";
	helpBtn.style.display = "none";
	trainingArea.style.display="none";
})

no.addEventListener("click", function(){ help.style.display = "inline";
helpBtn.style.display = "inline";
	alert("What would be the suitable answer?");
})

helpBtn.addEventListener("click", function(){
trainingArea.style.display="none";
	botTalk.push(help.value);
	newInput = textToBinary(txt.value);

    //all the new infromation that OASIS learn will be saved in localStorage
    localStorage.setItem("bot", JSON.stringify(botTalk));	
    //----------------------------------------------------------

trainData.push({ input: newInput, output: {[commands]: 1} }); //user training data

//the new phrases or words that trigger OASIS new answers will be converted in binary and saved 
//in the localStorage
localStorage.setItem("data", JSON.stringify(trainData));

//-------------------------------------------------------------------------------------

net = new brain.NeuralNetwork();

//Training the AI
net.train(trainData, {
    iterations: 20000, //max interactions training
	log: true,
	logPeriod: 5,
	errorThresh: 0.0005,
});

//when you teach OASIS a new information you increase the array size (this information is extremely important)
commands =  +commands+1;
localStorage.setItem("neurons",commands);

alert("OASIS has been trained!");

	txt.value="";
	help.value="";
   help.style.display = "none";
	helpBtn.style.display = "none";
})

function textToBinary(text){
	//Storing all letters as binary numbers for AI
text = text.toUpperCase();
	var data = [];
	
	for (i=0;i<text.length;i++){
		
		if ( text[i]=="A"){
			data = data.concat([1,0,0,0,0,0,0]);
		}
		else if (text[i]=="B"){
			data = data.concat([1,0,0,0,0,0,1]);
		}
		else if (text[i]=="C"){
			data = data.concat([1,0,0,0,0,1,0]);
		}
		else if (text[i]=="D"){
			data = data.concat([1,0,0,0,0,1,1]);
		}
		else if (text[i]=="E"){
			data = data.concat([1,0,0,0,1,0,0]);
		}
		else if (text[i]=="F"){
			data = data.concat([1,0,0,0,1,0,1]);
		}
		else if (text[i]=="G"){
			data = data.concat([1,0,0,0,1,1,0]);
		}
		else if (text[i]=="H"){
			data = data.concat([1,0,0,0,1,1,1]);
		}
		else if (text[i]=="I"){
			data = data.concat([1,0,0,1,0,0,0]);
		}
		else if (text[i]=="J"){
			data = data.concat([1,0,0,1,0,0,1]);
		}
		else if (text[i]=="K"){
			data = data.concat([1,0,0,1,0,1,0]);
		}
		else if (text[i]=="L"){
			data = data.concat([1,0,0,1,0,1,1]);
		}
		else if (text[i]=="M"){
			data = data.concat([1,0,0,1,1,0,0]);
		}
		else if (text[i]=="N"){
			data = data.concat([1,0,0,1,1,0,1]);
		}
		else if (text[i]=="O"){
			data = data.concat([1,0,0,1,1,1,0]);
		}
		else if (text[i]=="P"){
			data = data.concat([1,0,0,1,1,1,1]);
		}
		else if (text[i]=="Q"){
			data = data.concat([1,0,1,0,0,0,0]);
		}
		else if (text[i]=="R"){
			data = data.concat([1,0,1,0,0,0,1]);
		}
		else if (text[i]=="S"){
			data = data.concat([1,0,1,0,0,1,0]);
		}
		else if (text[i]=="T"){
			data = data.concat([1,0,1,0,0,1,1]);
		}
		else if (text[i]=="U"){
			data = data.concat([1,0,1,0,1,0,0]);
		}
		else if (text[i]=="V"){
			data = data.concat([1,0,1,0,1,0,1]);
		}
		else if (text[i]=="W"){
			data = data.concat([1,0,1,0,1,1,0]);
		}
		else if (text[i]=="X"){
			data = data.concat([1,0,1,0,1,1,1]);
		}
		else if (text[i]=="Y"){
			data = data.concat([1,0,1,1,0,0,0]);
		}
		else if (text[i]=="Z"){
			data = data.concat([1,0,1,1,0,0,1]);
		}
		else if (text[i]=="?"){
			data = data.concat([1,1,1,1,1,1,1]);
		}
	}
	//Used the code below to be able to read long arrays
	//console.log(data.toString());

	//Fill user input array with zeros to get correct length
	if (data.length < maxLength){
		remainingLength = maxLength - data.length;
		zeroArray = Array(remainingLength).fill(0);
		data = data.concat(zeroArray);
	}
	return data;
}
});
