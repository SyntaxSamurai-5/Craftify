// const form = document.querySelector("#regForm");
// const alertBox = document.querySelector("#alertBox");
// const sheetURL = "https://script.google.com/macros/s/AKfycbxO9KdyVKmP_eVrXfWSW5TUBqv_0CdzIM2rV4-HfNq7VCO8tgsvaHJD_lcWGeV_Glm5xQ/exec"; // your script

// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   const fullname = document.getElementById("fullname").value.trim();
//   const email = document.getElementById("email").value.trim();
//   const phone = document.getElementById("phone").value.trim();
//   const username = document.getElementById("username").value.trim();
//   const password = document.getElementById("password").value.trim();

//   if (!fullname || !email || !phone || !username || !password) {
//     showAlert("Please fill all the fields.", "danger");
//     return;
//   }

//   fetch(sheetURL, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({ fullname, email, phone, username, password })
//   })
//     .then(res => res.json())
//     .then(data => {
//       console.log(data); // For debugging
//       if (data.result === "success") {
//         showAlert("Successfully Registered!", "success");
//         form.reset();
//       } else {
//         showAlert("Failed to register. Try again.", "danger");
//       }
//     })
//     .catch(err => {
//       console.error(err); // For debugging
//       showAlert("Error occurred: " + err.message, "danger");
//     });
// });

// ✅ Move this OUTSIDE the form listener
// function showAlert(msg, type) {
//   alertBox.innerHTML = `
//     <div class="alert alert-${type} alert-dismissible fade show mt-2" role="alert">
//       ${msg}
//       <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
//     </div>
//   `;
// }


document.getElementById("regForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const data = {
      fullname: document.getElementById("fullname").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      username: document.getElementById("username").value,
      password: document.getElementById("password").value
  };

  fetch("https://script.google.com/macros/s/AKfycbwX_HvLHCPhspKUgYAB8fNurXS8S7isTO3Iqvzgx-M/dev", {
    method: "POST",
    mode: "no-cors",  // ✅ This avoids CORS issue
    body: JSON.stringify(data),
    headers: {
        "Content-Type": "application/json"
    }
})
.then(() => {
    document.getElementById("alertBox").innerHTML =
      `<div class="alert alert-success">Registration Successful!</div>`;
    document.getElementById("regForm").reset();
})
.catch(error => {
    console.error("Error:", error);
    document.getElementById("alertBox").innerHTML =
      `<div class="alert alert-danger">Something went wrong.</div>`;
});

});
