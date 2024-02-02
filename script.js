// Check if the viewport width is greater than or equal to 1440 pixels
if (window.matchMedia("(min-width: 1440px)").matches) {
  document.querySelector(".mobile-img").src =
    "./assets/images/illustration-sign-up-desktop.svg";
}
//write functuion where  check valid email
function validateEmail() {
  const emailnput = document.getElementsByTagName("input");
  const errorMessage = document.querySelector(".error-message");
  // Regular expression for a simple email validation
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(emailnput.value)) {
    errorMessage.textContent = "";
  } else {
    errorMessage.textContent = "Valid email required";
  }
}

// add event to submit button when clicking to check validation email
const submitBtn = document.querySelector(".submit-btn");
submitBtn.addEventListener("click", () => {
  validateEmail();
});
