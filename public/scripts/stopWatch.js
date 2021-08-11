const stopWatch= document.querySelector("#stopWatch");
const btn = document.querySelector("#stopWatch-button");
let stopWatchID = null;
let countedTime = 0;

let time = {
	days: 0,
	hours: 0,
	minutes: 59,
	seconds: 57,
}

const rearrangeTime = () =>{
	++time.minutes;
	time.seconds = 0;
	
	if(time.minutes === 60){
		++time.hours;
		time.minutes = 0;
	}
	if(time.hours === 24){
		++time.days;
		time.hours = 0;
	}
}

const printTime = () => {
	++time.seconds;
	if(time.seconds === 60){
		rearrangeTime();
	}
	
	stopWatch.innerHTML = `${time.hours} h ${time.minutes} m ${time.seconds} s`;
}

const startCount = () =>{
	stopWatchID = setInterval(printTime,1000);
}

const handleClick = () =>{
	if(btn.innerHTML=="start"){
		btn.innerHTML="stop";
		startCount();
	}else{
		btn.innerHTML="start";
		clearInterval(stopWatchID);
	}
}


const init = () => {
	btn.addEventListener('click',handleClick);
}

init();