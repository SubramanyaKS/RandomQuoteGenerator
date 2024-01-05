var data;
let front = true;
const authors = document.querySelectorAll(".author");
const texts = document.querySelectorAll(".text");
const body = document.getElementById("body");
const button = document.querySelectorAll(".new-quote");
const blockFront = document.querySelector(".block__front");
const message=new SpeechSynthesisUtterance();
const authorFront = authors[0];
const textFront = texts[0];
const buttonFront = button[0];
var quote;
var author;

fetch("https://type.fit/api/quotes")
	.then(function(response) {
		return response.json();
	})
	.then(function(data) {
		this.data = data;
		displayQuote1()
});

const talk =()=>{
	message.text=quote+" by"+author;
	speechSynthesis.speak(message);
}
const displayQuote1 = () =>{

	let index = Math.floor(Math.random()*data.length);
	quote = data[index].text;
	author = data[index].author;
	if(!author){
		author = "Anonymous"
	}
	textFront.innerHTML = quote;
	authorFront.innerHTML = author;
}
function newQuote1(){
	displayQuote1();
}
function tweetWithText() {
	// Replace the 'YOUR_TEXT_HERE' with the desired tweet text
	
	let a = author.split(",")
	let auth= a[0]
	console.log(auth)
	var tweetText = encodeURIComponent(quote+"-"+auth);

	// Construct the Twitter Web Intent URL
	var tweetIntentUrl = "https://twitter.com/intent/tweet?text=" + tweetText;

	// Set the href attribute of the link
	document.getElementById("tweetLink").href = tweetIntentUrl;
}