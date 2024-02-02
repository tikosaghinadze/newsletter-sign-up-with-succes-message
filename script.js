// Check if the viewport width is greater than or equal to 1440 pixels
if (window.matchMedia("(min-width: 1440px)").matches) {
  document.querySelector(".mobile-img").src =
    "./assets/images/illustration-sign-up-desktop.svg";
}
//write functuion where  check valid email
function validateEmail(event) {
  event.preventDefault();
  const emaiInput = document.querySelector("input[name='email']");
  const errorMessage = document.querySelector(".error-message");
  const successP = document.querySelector(".success-p");
  // Regular expression for a simple email validation
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(emaiInput.value)) {
    errorMessage.textContent = "";
    window.location.href = "./success.html";
    successP.textContent = `A confirmation email has been sent ${emaiInput.value}.Please open it and click the button inside to confirm your subscription`;
  } else {
    errorMessage.textContent = "Valid email required";
  }
}

// add event to submit button when clicking to check validation email
const submitBtn = document.querySelector(".submit-btn");
submitBtn.addEventListener("click", (event) => {
  validateEmail(event);
});
console.log(2);
