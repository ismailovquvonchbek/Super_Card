var elForm = document.querySelector(".form")
var elFormNumbers = document.querySelector(".card__numbers")
var elFormKun = document.querySelector(".select_kun")
var elFormYil = document.querySelector(".select_yil")
var elFormName = document.querySelector(".card__name")
var elTextFull = document.querySelector(".card_raqam")
var elTextNumbers = document.querySelector(".card_list")
var elTextSana = document.querySelector(".card_item")

console.log(elTextFull.textContent);

// console.log(elForm);


elForm.addEventListener("submit", function(evt){
  evt.preventDefault()

  var inputNumbers = elFormNumbers.value.trim()
  var inputName = elFormName.value.trim()
  var inputKun = elFormKun.value.trim()
  var inputYil = elFormYil.value.trim()

  if(isNaN(inputNumbers)) {
    console.log("Error");

    return
  }

  var textFull = `${inputKun} / ${inputYil}`

  elTextNumbers.textContent = inputNumbers
  elTextSana.textContent = textFull
  elTextFull.textContent = inputName

  
})