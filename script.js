
var commCounter = 0;

function setup(){
	commCounter++;
	if (commCounter == 1) {
		var myElements = document.querySelectorAll(".topic");
		for (var i = 0; i < myElements.length; i++) {
    		myElements[i].style.top = "4.2%";
		}
		var imageURL = "img/sc.jpg";
		var commName = "United Nations Security Council";
		var nations = ["United States of America","United Kingdom","Russia",
		"France","China","Egypt","Senegal","Ukraine","Japan","Uruguay","Jordan",
		"Syrian Government","Syrian Rebels","Venezuela","Iraq","Spain",
		"New Zealand","Israel","Turkey","Lebanon","Honduras","Peru","Bolivia",
		"Columbia","Peru","Mexico","Panema"];		
		document.getElementById("commTopic").innerHTML = "Conflict in Syria";
	} else if (commCounter == 2){
		var myElements = document.querySelectorAll(".topic");
		for (var i = 0; i < myElements.length; i++) {
    		myElements[i].style.top = "4.2%";
		}
		var imageURL = "img/unhcr.png";
		var commName = "UN High Commision for Refugees";
		var nations = ["Armenia","Hungary","Syria","United States of America",
		"Serbia","Canada","Iraq","France","Germany","Greece","Slovenia","Croatia",
		"Norway","Sweden","Denmark","Italy","Belgium","Russia","Lebanon","Turkey",
		"Saudi Arabia"];		document.getElementById("commTopic").innerHTML = "Migrants in Europe";
	} else if (commCounter == 3){
		var myElements = document.querySelectorAll(".topic");
		for (var i = 0; i < myElements.length; i++) {
    		myElements[i].style.top = "4.2%";
		}
		var imageURL = "img/who.jpg";
		var commName = "World Health Organization";
		var nations = ["India","China","Pakistan","Afganistan","Switzerland","United Kingdom",
		"United States of America","Russia","Canada","Brazil","Singapore","Peru","Nigeria","Israel"];
		document.getElementById("commTopic").innerHTML = "Diseases";
	} else {
		var imageURL = "img/maze.jpg";
		commCounter = 0;
		var myElements = document.querySelectorAll(".topic");
		for (var i = 0; i < myElements.length; i++) {
    		myElements[i].style.top = "6%";
		}

		var commName = "Stuck in The Maze";
		var nations = ["Thomas","Newt","Minho","Gally","Chuck","Alby","Teresa","Ben","Frypan","Zart"];
		document.getElementById("commTopic").innerHTML = "Crisis Committee<br>";
	}
	
	for (var i = 0; i<nations.length;i++){
		document.getElementById("test"+(i+1)).innerHTML = nations[i];
	}
	document.getElementById("commTitle").innerHTML = commName;
	document.getElementById("logo").src = imageURL;
}
var caucusCount = 1;
function changeCaucus(){
	var caucuses = ["Speakers List","Moderated Caucus","Unmoderated"];
	document.getElementById("caucus").innerHTML = caucuses[caucusCount];
	
	caucusCount++;
	if(caucusCount == 3){
		caucusCount = 0;
	}

}
var syria = true;
function changeTopic(){
	if(commCounter == 1 && syria ==true){
		document.getElementById("commTopic").innerHTML = "Latin Drug Trade";
		syria = false;
	} else if (commCounter == 1 && syria ==false){
		document.getElementById("commTopic").innerHTML = "Conflict in Syria";
		syria = true;
	}
}

var speakingTime = 30;
var element = "";
function select(elemid){
	$(".member").css("background", "rgba(54, 25, 25, 0)");
    $(elemid).css("background-color", "blue");
	element = $(elemid);
}





function changeSpeakingTime(){
	var myTime = prompt("Speaking Time:", speakingTime);
	speakingTime = myTime;
}

function buttonSelect(){

	$("#speakerslist").append(element);
	$(".member").css("background", "rgba(54, 25, 25, 0)");
}
function buttonRemove(){
	$("#commiteelist").append(element);
	$(".member").css("background", "rgba(54, 25, 25, 0)");
}

function speak(){
	reset();
	start();
	checkTime();
}





function checkTime(){
	var timerId = setTimeout(function () {    //  call a 3s setTimeout when the loop is called
      var mySeconds = Math.floor(x.time() / 1000 );                     //  increment the counter
      if (mySeconds<speakingTime) {            //  if the counter < 10, call the loop function
         checkTime();             //  ..  again which will trigger another 
      }else{
      	stop();
      	alert("Times Up");  
      	reset(); 
      	clearInterval(timerId); 
      }              //  ..  setTimeout()
   	}, 200)

}

var	clsStopwatch = function() {
		var	startAt	= 0;	
		var	lapTime	= 0;	
		var	now	= function() {
				return (new Date()).getTime(); 
			}; 
		this.start = function() {
				startAt	= startAt ? startAt : now();
			};
		this.stop = function() {
				lapTime	= startAt ? lapTime + now() - startAt : lapTime;
				startAt	= 0;
			};
		this.reset = function() {
				lapTime = startAt = 0;
			};
		this.time = function() {
				return lapTime + (startAt ? now() - startAt : 0); 
			};
	};

var x = new clsStopwatch();
var $time;
var clocktimer;

function pad(num, size) {
	var s = "0000" + num;
	return s.substr(s.length - size);
}


var full = false;

function fullscreen(){
		var i = document.body;
		var element = document.getElementById("textbox");
		// go full-screen
		if(!full){
			if (i.requestFullscreen) {
				i.requestFullscreen();
			} else if (i.webkitRequestFullscreen) {
				i.webkitRequestFullScreen();
			} else if (i.mozRequestFullScreen) {
				i.mozRequestFullScreen();
			} else if (i.msRequestFullscreen) {
				i.msRequestFullscreen();
			}
			full = true;
		} else {

			if (document.exitFullscreen) {
				document.exitFullscreen();
			} else if (document.webkitExitFullscreen) {
				document.webkitExitFullscreen();
			} else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			}	 else if (document.msExitFullscreen) {
				document.msExitFullscreen();
			}
			full = false;	
		}
		document.body.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
}

function formatTime(time) {
	var h = m = s = ms = 0;
	var newTime = '';

	h = Math.floor( time / (60 * 60 * 1000) );
	time = time % (60 * 60 * 1000);
	m = Math.floor( time / (60 * 1000) );
	time = time % (60 * 1000);
	s = Math.floor( time / 1000 );
	ms = time % 1000;

	newTime = pad(m, 2) + ':' + pad(s, 2) + ':' + pad(ms, 3);
	return newTime;
}

function show() {
	$time = document.getElementById('time');
	update();
}

function update() {
	$time.innerHTML = formatTime(x.time());
}

function start() {
	clocktimer = setInterval("update()", 1);
	x.start();
}

function stop() {
	x.stop();
	clearInterval(clocktimer);
}

function reset() {
	stop();
	x.reset();
	update();
}
