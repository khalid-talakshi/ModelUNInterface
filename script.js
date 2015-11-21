
var commCounter = 0;
function setup(){
	commCounter++;
	if (commCounter == 1) {
		var imageURL = "img/sc.jpg";
		var commName = "United Nations Security Council";
		var nations = ["China","France","Russian Federation","United Kingdom","United States","Angola","Chad","Chile","Jordan","Lithuania"];
	} else if (commCounter == 2){
		var imageURL = "img/unhcr.png";
		var commName = "United Nations High Commision for Refugees";
		var nations = ["Portugal","United States","Netherlands","Japan","Norway","Switzerland","Denmark","Iran"];
	} else if (commCounter == 3){
		var imageURL = "img/who.jpg";
		var commName = "World Health Organization";
		var nations = ["China","France","Russian Federation","United Kingdom","United States","Angola","Chad","Chile","Jordan","Lithuania"];
	} else {
		var imageURL = "img/maze.jpg";
		commCounter = 0;
		var commName = "Stuck in The Maze";
		var nations = ["Thomas","Newt","Minho","Gally","Chuck","Alby","Teresa","Ben","Frypan","Zart"];
	}
	for (var i = 0; i<nations.length;i++){
		document.getElementById("test"+(i+1)).innerHTML = nations[i];
	}
	document.getElementById("commTitle").innerHTML = commName;
	document.getElementById("logo").src = imageURL;
}
var caucusCount = 1;
function changeCaucus(){
	var caucuses = ["Speakers List","Moderated Caucus","Unmoderated Caucus"];
	document.getElementById("caucus").innerHTML = caucuses[caucusCount];
	
	caucusCount++;
	if(caucusCount == 3){
		caucusCount = 0;
	}

}

var speakingTime = 30;
var element = "";
function select(elemid){
	$(".member").css("background-color", "white");
    $(elemid).css("background-color", "blue");
	element = $(elemid);
}



function changeSpeakingTime(){
	var myTime = prompt("Speaking Time:", speakingTime);
	speakingTime = myTime;
}

function buttonSelect(){

	$("#speakerslist").append(element);
	$(".member").css("background-color", "white");
}
function buttonRemove(){
	$("#commiteelist").append(element);
	$(".member").css("background-color", "white");
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