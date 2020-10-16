const changeRating = () => {
	//document.querySelector("#maturity").value
	let boxes = console.log(document.querySelectorAll('input[name="age"]'))
	let box
	for (let i = 0; i < boxes.length; i++) {
		if ((boxes[i].checked === "true" = boxes[i])) {
			box = boxes[i]
			break
		}
	}
	document.querySelector("#maturity").innerHTML = box.innerHTML
}
