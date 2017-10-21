//EXERCISE1
window.onload;

let boundaryOver = document.getElementById("boundary1");

boundaryOver.addEventListener("mouseover", function warning(){
		boundaryOver.classList.add("youlose");
}
)

			
//EXERCISE2
for (var count=0;count<document.getElementsByClassName("boundary").length-1; count++){
	document.getElementsByClassName("boundary")[count].addEventListener("mouseover", function control(){
		for (var num = 0; num < document.getElementsByClassName("boundary").length - 1; num++){
			document.querySelectorAll("div.boundary")[num].classList.add("youlose");
		}
		let newElement = document.createElement("h2");
		newElement.textContent = "You Lose!";
		document.body.append(newElement);
		var status = document.createAttribute("id");
		status.value = "status";
		newElement.setAttributeNode(status);	
	})
}

//EXERCISE3
let endOfMaze = document.getElementById("end");
endOfMaze.addEventListener("mouseover", function end(){
			if (document.getElementsByClassName("youlose").length===0){
				let newElement = document.createElement("h2");
				newElement.textContent = "You Win!";
				document.body.append(newElement);
				var status = document.createAttribute("id");
				status.value = "status";
				newElement.setAttributeNode(status);	

			}

})


//EXERCISE4
let resetGame=document.getElementById("start");
resetGame.addEventListener("click", function reset(){
		var n=document.getElementsByClassName("boundary").length-1;
		while (n>=0){
			document.querySelectorAll(".boundary")[i].classList.remove("youlose");
	 		n--;
	    }
	   if (document.getElementsByTagName("div").innerHTML === `<h2 id = "status"> You Win </h2>` || `<h2 id = "status"> You Lose </h2>`){
	   	var removeSatus = document.getElementById("status"); 
	   	removeSatus.parentNode.removeChild(removeSatus); //removes the status either you win or you lose when clicked
	   }

})

let loseGame = document.getElementById("maze");
loseGame.addEventListener("mouseleave", function endGame(){
	for (var n = 0; n < document.getElementsByClassName("boundary").length - 1; n++){
		document.querySelectorAll("div.boundary")[n].classList.add("youlose");
	}
	let newElement = document.createElement("h2");
	newElement.textContent = "You Lose!";
	document.body.append(newElement);
	var status = document.createAttribute("id");
	status.value = "status";
	newElement.setAttributeNode(status);
})
