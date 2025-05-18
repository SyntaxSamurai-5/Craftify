document.getElementById("regForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const scriptURL = "https://script.google.com/macros/s/AKfycbz1UeyEOMrooJcd29DHCDq3xZ9ER0ERmwKo1HS8QQn_Q_6KIxheAu3FPSiuCEeWV81L/exec";  // Replace with Apps Script URL

  const formData = new URLSearchParams();
  formData.append("action", "register");
  formData.append("name", name);
  formData.append("email", email);
  formData.append("phone", phone);
  formData.append("username", username);
  formData.append("password", password);

  fetch(scriptURL, {
    method: 'POST',
    body: formData
  })
  .then(response => response.text())
  .then(responseText => {
    if (responseText === "EXISTS") {
      alert("Username already exists!");
    } else if (responseText === "SUCCESS") {
      alert("Registration successful!");
      window.location.href = "login.html";
    } else {
      alert("Registration failed.");
    }
  })
  .catch(error => alert("Error! " + error.message));
});
