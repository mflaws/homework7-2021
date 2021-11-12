var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});
/// To play
document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	 video.play();
	 console.log(video.currentTime = 5);
});

/// To pause
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

///To slow down
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Old Video speed is "+ video.playbackRate);
	video.playbackRate *= 0.95;
	console.log("New Video speed is "+ video.playbackRate);
});

/// To speed it up
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate *= 1.05;
	console.log("New Video speed is "+ video.playbackRate);
});
/// To skip ahead
document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 15;
	console.log(video.currentTime);
	if(video.currentTime >= video.duration){
		video.currentTime = 0;
		video.play();
	}
});
/// To mute
document.querySelector("#mute").addEventListener("click", function() {
	if(video.muted == false){
		video.muted = true;
		document.querySelector("#mute").innerHTML = 'Unmute';
	}
	else{
		video.muted = false;
		document.querySelector("#mute").innerHTML = 'Mute';
	}
});

/// Volume slider
document.querySelector("#slider").addEventListener("change", function(e) {
	console.log("slider");
	video.volume = e.currentTarget.value / 100;
	document.querySelector("#volume").innerHTML = (video.volume * 100) + "%";
});

/// Old School
document.querySelector("#vintage").addEventListener("click", function() {
	video.style.filter = "grayscale(100%)";
});


/// Original
document.querySelector("#orig").addEventListener("click", function() {
	video.style.filter = "grayscale(0%)";
});