const button = document.querySelectorAll(".question_container")
const answer = document.querySelectorAll(".answer")
const rotate = document.querySelectorAll(".rotate")
const arrowDown = document.querySelectorAll(".arrow_down")
const buttonArray = new Array(button.length)

function showAnswer (place){
    if(buttonArray[place] == 1){
        answer[place].classList.remove("hidden")
        arrowDown[place].classList.add("rotate")
        buttonArray[place] = 0
    }else{
        answer[place].classList.add("hidden")
        arrowDown[place].classList.remove("rotate")
        buttonArray[place] = 1
    }
}

for (let i = 0; i <button.length; i++){
    buttonArray[i] = 1
    button[i].addEventListener("click", () =>{
        showAnswer(i)
    })
}
