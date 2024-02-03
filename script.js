document.addEventListener("DOMContentLoaded", function () {
  // Check if the viewport width is greater than or equal to 1440 pixels

  //write functuion where  check valid email
  const savedEmail = localStorage.getItem("emailInput");
  if (savedEmail) {
    const successP = document.querySelector(".email");
    if (successP) {
      successP.textContent = savedEmail;
    }
  } else {
    console.log("No email found in local storage");
  }
  function validateEmail(event) {
    event.preventDefault();
    const emaiInput = document.querySelector("input");
    const errorMessage = document.querySelector(".error-message");
    // Regular expression for a simple email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(emaiInput.value)) {
      errorMessage.textContent = "";
      window.location.href = "./success.html";
      localStorage.setItem("emailInput", emaiInput.value);
    } else {
      errorMessage.textContent = "Valid email required";
    }
  }

  // add event to submit button when clicking to check validation email
  const submitBtn = document.querySelector(".submit-btn");
  if (submitBtn) {
    submitBtn.addEventListener("click", (event) => {
      validateEmail(event);
    });
  }
  const successBtn = document.querySelector(".success-btn");
  if (successBtn) {
    successBtn.addEventListener("click", () => {
      history.back();
    });
  }
});
