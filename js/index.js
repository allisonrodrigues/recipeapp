// STARTING VALUES
let recipeName = `Brioche Cinnamon Rolls`
let ttlNumSteps = document.querySelectorAll(`.steps .step`).length
let imOnStep = 0

// UI ELEMENTS OF NOTE
let prevBtn = document.querySelector(`#step-prev`)
let nextBtn = document.querySelector(`#step-next`)
let stepsSlider = document.querySelector(`.steps`)
let stepNum = document.querySelector(`#step-num`)


////////////////////////////////////////////////////
// WHEN THE DOCUMENT LOADS...
// Step number increases (imOnStep)
stepNum.textContent = `Step ${imOnStep + 1} of ${ttlNumSteps}`


// GO TO NEXT STEP
// A function is a named collection of steps
function goToNextStep() {

	if (imOnStep < ttlNumSteps-1) {
		// Increase the step number by 1
		imOnStep = imOnStep + 1
	}

	// Step slides to the left (1/3 to the left, if three steps)
	stepsSlider.style.setProperty(`--n`, imOnStep)

	// Step number increases (imOnStep)
	stepNum.textContent = `Step ${imOnStep + 1} of ${ttlNumSteps}`

}

// Click the "next" arrow (add an event listener)
nextBtn.addEventListener(`click`, goToNextStep)
prevBtn.addEventListener(`click`, goToPrevStep)


////////////////////////////////////////////////////
// GO TO PREV STEP
function goToPrevStep() {

	if (imOnStep > 0) {
		// Decrease the step number by 1
		imOnStep = imOnStep - 1
	}


	// Step slides to the right (1/3 to the left, if three steps)
	stepsSlider.style.setProperty(`--n`, imOnStep)

	// Step number increases (imOnStep)
	stepNum.textContent = `Step ${imOnStep + 1} of ${ttlNumSteps}`

}







////////////////////////////////////////////////////
// OTHER NOTES
/*
These do the same thing:
stepsSlider.style.backgroundColor = `red`
stepsSlider.style.setProperty(`background-color`, `red`)
*/


// stepNum.classList.add('closed')




// 1. Fix up HTML and CSS layout
// 2. Complete the CSS for the collapsing list
//		  - Add a button to toggle the list
// 3. When a user clicks the new button, add the 'closed' class
//			- Now change "add" to "toggle"
// 4. Replicate the "next" functionality for "prev"
