const bg = document.getElementById("bg");
const change = document.getElementById("change");
const all = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'A', 'B', 'C', 'D', 'E', 'F']
const copy = document.getElementById("copy")

copy.addEventListener("click", ()=>{
  //CREATE ELEMENT
  let btnText = document.createElement('textarea')
  //SET VALUE
  btnText.value = change.value
  //SET ELEMENT TO READ ONLY
  btnText.setAttribute('readonly', '')
  //ELEMENT STYLE SO IT IS HIDDEN
  btnText.style = { zindex: '-10px'}
  //APPEND TO THE DOCUMENT
  document.body.appendChild(btnText)
  //SELECT TEXT
  btnText.select()
  //COPY TO CLIPBOARD
  document.execCommand("copy")
  //REMOVE FROM DOCUMENT
  document.body.removeChild(btnText)
  //CALL MESSAGE FUNCTION
  message()
})

function message(){
  //CREATE MESSAGE DIV
  let myDiv = document.createElement('div')
  myDiv.style.opacity = '0'
  //ADD CLASS TO THE ELEMENT
  myDiv.classList.add('message')
  //CREATE PARAGRAPH
  let myMessage = document.createElement('p')
  //ADD TEXT TO THE PARAGRAPH
  myMessage.innerText = 'Copied to Clipboard'
  //APPEND TO THE DOCUMENT
  myDiv.appendChild(myMessage)
  document.body.appendChild(myDiv)
  //ANIMATION
  setTimeout(() => {
    myDiv.style.opacity = '1'
  }, 300);
  setTimeout(() => {
    myDiv.style.opacity = '0'
  }, 1700);
  //DELETE MESSAGE
  setTimeout(() => {
    document.body.removeChild(myDiv)
  }, 2000);
}

change.addEventListener("click", function () {
  //CREATE NEW COLOR VARIABLE
  let newColor = '#'
  //RANDOM GENERATE 6 NUMBERS AND ADD EACH TO NEWCOLOR VARIABLE
  for(let i = 0; i<6;i++){
    newColor += all[Math.floor(Math.random() * all.length)]
  }
  //CHANGE BUTTON TEXT
  change.value = newColor
  //CHANGE BACKGROUND COLOR TO BUTTONS VALUE
  bg.style.background = newColor
});