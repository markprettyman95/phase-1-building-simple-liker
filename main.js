// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const errorModal = document.querySelector('#modal');
const hearts = document.querySelectorAll('.like-glyph');

errorModal.classList.add('hidden')

hearts.forEach(heart => {
  heart.addEventListener('click', () => {
    if(heart.textContent === EMPTY_HEART) {
      mimicServerCall()
      .then(() => {
        heart.textContent = FULL_HEART
        heart.classList.add('activated-heart')
      })
      .catch(error => {
        const errorMessage = document.querySelector('#modal-message');
        errorMessage.textContent= error;
        errorModal.classList.remove('hidden');
        // Hide error modal after 3 seconds
        setTimeout(() => {
          errorModal.classList.add('hidden');
        }, 3000);
      });
    } else {
      heart.textContent = EMPTY_HEART;
      heart.classList.remove('activated-heart');
    }
  });
});





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
