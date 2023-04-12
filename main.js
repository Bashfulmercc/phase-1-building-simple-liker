// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const heartArray = [...document.getElementsByClassName("like-glyph")];
const modal = document.getElementById("modal");
const modalP = document.getElementById("modal-message");



const callAndCatch = (e) => {
  mimicServerCall()
  .then(() => handleE(e))
  .catch(error => handleError(error))
}

const handleError = (errorMessage) => {
  modal.classList.remove("hidden")
  const p = document.createElement("p")
  modalP.innerText = errorMessage
  modal.appendChild(p)
  setTimeout(() => {
    modal.classList.add("hidden")
    modalP.innerText = ""
  }, 3000)
}

const handleE = (e) => {
  if(e.target.textContent === EMPTY_HEART){
    e.target.classList.add("activated-heart")
    e.target.textContent = FULL_HEART
  } else {
    e.target.classList.remove("activated-heart")
    e.target.textContent = EMPTY_HEART
  }

}


heartArray.map(heart => {
  heart.addEventListener("click", callAndCatch)
})






//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
