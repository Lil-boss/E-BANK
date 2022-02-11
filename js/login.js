document.getElementById("login-btn").addEventListener("click", function () {
  const userName = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (userName === "admin" && password === "admin") {
    window.location.href = "banking.html";
  }
});
