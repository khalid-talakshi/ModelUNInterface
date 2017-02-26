
var commCounter = 0;
var topicIndex = 0;

function setup(){
	
    commCounter++;
	topicIndex = 0;
	changeTopic();
	
    if (commCounter == 1) {
		var myElements = document.querySelectorAll(".topic");
		for (var i = 0; i < myElements.length; i++) {
    		myElements[i].style.top = "4.2%";
		}
		var imageURL = "img/sc.jpg";
		var commName = "United Nations Security Council";
		var nations = ["China","Ethiopia","South Korea","Italy","Japan","Ukraine","Bolivia","Philippines","Papua New Guinea","Sweden","India","Malaysia","UK","USA","Brunei","Egypt","Uruguay","Nepal","Indonesia","Kazakhstan","Vietnam","Tibet (Representative)","Russia","Bhutan","Senegal","Taiwan (Representative)","North Korea","France","Bolivia","Italy","Malaysia","Iraq","Japan","Turkey","Ukraine","Sweden","Egypt","Vietnam","UK","Kazakhstan","China ","Russia","Senegal","Uruguay","Philippines","Brunei","Ethiopia","Syria","India","USA","Mongolia","Iran"];	

		
	} 
    else if (commCounter == 2){
		var myElements = document.querySelectorAll(".topic");
		for (var i = 0; i < myElements.length; i++) {
    		myElements[i].style.top = "4.2%";
		}
		var imageURL = "img/eu.png";
		var commName = "European Union";
		var nations = ["Finland","Denmark","Greece","Italy","France","Austria","Hungary","Sweden","UK","Vatican City (observer state)","Switzerland","Netherlands","Germany","Czech Republic","Belgium","Russia","Poland","Bulgaria","Portugal","Romania","Malta","Cyprus","Turkey (Observer state)","Croatia","Syria (Observer State)","Ireland","USA (Observer State)","Afghanistan","Iraq (Observer State)","Latvia","Canada (observer state)"];	
	} 
    else if (commCounter == 3){
		var myElements = document.querySelectorAll(".topic");
		for (var i = 0; i < myElements.length; i++) {
    		myElements[i].style.top = "4.2%";
		}
		var imageURL = "img/2050.png";
		var commName = "A.D. 2050";
		var nations = ["USA","Canada ","China ","Vietnam ","Japan ","Maldives ","United Kingdom ","Germany ","France ","Micronesia","Indonesia ","Thailand ","Philippines ","Brazil ","Kiribati (Island Nation)","Netherlands ","Taiwan","Malaysia ","India  ","Ireland"];
	
	}
    else if (commCounter == 4){
		var myElements = document.querySelectorAll(".topic");
		for (var i = 0; i < myElements.length; i++) {
    		myElements[i].style.top = "4.2%";
		}
		var imageURL = "img/crisis.png";
		var commName = "Crisis Committee";
		var nations = ["China","Chile","New Zealand","Russia","Japan","USA","Saudi Arabia","UK","Norway","France","Australia","Micronesia","France","OPEC","Marine Biologist","South Africa"];

	}
    else if (commCounter == 5){
		var myElements = document.querySelectorAll(".topic");
		for (var i = 0; i < myElements.length; i++) {
    		myElements[i].style.top = "4.2%";
		}
		var imageURL = "img/unep.png";
		var commName = "UNEP";
		var nations = ["China ","Indonesia ","The Philippines ","Thailand ","Vietnam ","Sir Lanka ","Egypt ","Malaysia ","Kiribati","Bangladesh ","South Africa ","India ","France","Turkey ","Pakistan ","Brazil ","China","Morocco ","Samoa","U.S.A","Canada ","Vanuatu","Norway","Malaysia","Russia ","Japan ","Micronesia"];

	}
    else {
		var imageURL = "img/mars.png";
		commCounter = 0;
		var myElements = document.querySelectorAll(".topic");
		for (var i = 0; i < myElements.length; i++) {
    		myElements[i].style.top = "6%";
		}

		var commName = "Moving to Mars";
		var nations = ["James Mang","Isaiah Williams","Mateo Huegel","Natalka Bowley","Batool Jafri","Subaydah Aden","Bahara Khalilullah","Emily Standish","Eric Peng","Gabriel Deza","Tory Dockree","Deeksha Polamreddy","Josh Poon","Yazan Jarrad","Veniamin Veselovsky","Volodymyr Gryga","Anton Zubko"];

	}
	nations.sort();
	
    for (var i = 0; i<nations.length;i++){
		document.getElementById("test"+(i+1)).innerHTML = nations[i];
	}
	
    document.getElementById("commTitle").innerHTML = commName;
	document.getElementById("logo").src = imageURL;
    
}

var caucusCount = 1;

function changeCaucus(){
	
    var caucuses = ["Speakers List", "Moderated Caucus", "Unmoderated", "Round Table", "Other"];
	
    document.getElementById("caucus").innerHTML = caucuses[caucusCount];
	
	caucusCount++;
	if(caucusCount == 5){
		caucusCount = 0;
	}

}

function changeTopic(){

	var topics = [["Disputed Territories","Containing ISIS"],
	["Migrants in Europe","Terrorism"],
	["Rising Sea Levels","Artificial Intelligence"],
	["New Island Nation","Oil in Antarctica"],
	["Ocean Plastics"],["Colonizing Mars"]];

	if(topicIndex > topics[commCounter-1].length-1){

		topicIndex = 0;
	}
	document.getElementById("commTopic").innerHTML = topics[commCounter-1][topicIndex];
	topicIndex++;
	

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
