var myId = document.querySelector("#myId");
var container = document.querySelector("#contentContainer");


	container.addEventListener("click", function(event) {
	var xPosition = event.clientX - container.getBoundingClientRect().left - (myId.clientWidth / 2);
	var yPosition = event.clientY - container.getBoundingClientRect().top - (myId.clientHeight / 2);
	myId.style.left = xPosition + "px";
	myId.style.top = yPosition + "px";
	}
);

function unhide() {
    var hid = document.getElementsByClassName("text");
    if(hid[0].offsetWidth > 0 && hid[0].offsetHeight > 0) {
        hid[0].style.visibility = "visible";
		var hide = document.getElementsByClassName("textbehind");
    if(hide[0].offsetWidth > 0 && hide[0].offsetHeight > 0) {
        hide[0].style.visibility = "visible";
		}
	}
}

   
