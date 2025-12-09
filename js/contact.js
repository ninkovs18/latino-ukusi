function clearInputs() {
  document.getElementById("name").value = "";
  document.getElementById("message").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("email").value = "";
}

function sendEmail() {
  emailjs.send("service_nw9l3ji", "template_6onqinf", {
    name: document.getElementById("name").value,
    message: document.getElementById("message").value,
    subject: document.getElementById("subject").value,
    email: document.getElementById("email").value,
  });
}

const posalji = document.getElementById("posalji");

function showMessage() {
  let messageElement = document.getElementById("status-message");
  messageElement.style.display = "block";
  messageElement.style.opacity = "1";

  setTimeout(function () {
    let fadeEffect = setInterval(function () {
      if (messageElement.style.opacity > "0") {
        messageElement.style.opacity -= 0.1;
      } else {
        clearInterval(fadeEffect);
        messageElement.style.display = "none";
      }
    }, 100);
  }, 4000);
}

posalji.addEventListener("click", (e) => {
  e.preventDefault();

  sendEmail();
  clearInputs();
  showMessage();
});
